import { Component, OnInit } from '@angular/core';
import { StorageType } from 'src/app/common/enum/storage.enum';
import { Exception } from 'src/app/common/exception';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {

  isLoader = false;
  productList: any;
  loggedInUserDetails: any ={};

  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    let temp:any = this.storageService.get(StorageType.session, 'auth');
    this.loggedInUserDetails = JSON.parse(temp);
    this.getAllProduct();
  }

  getAllProduct() {
    const reqobj: any = {};
    reqobj.data = {
      email: this.loggedInUserDetails.email,
      tab: `published`,
    };
    this.productService.getAllProduct(reqobj).subscribe(
      (response: any) => {
        response.Data.forEach((product: any) => {
          if (product.quantity_available >= 1) {
            product.orderQuantity = 1            
          } else {
            product.orderQuantity = 'Out of stock'            
          }
        });
        this.productList = response.Data;
        console.log(this.productList)
      },
      (error) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.isLoader = false;
      },
    );
  }

  AddOrder(product: any) {
    const reqobj: any = {};
    const loggedInUserDetails = this.storageService.get(StorageType.session, 'auth');
    console.log(loggedInUserDetails);
    
    reqobj.data = {
      "email": this.loggedInUserDetails.email,
      "item_id": product.item_id,
      "prod_name": product.prod_name,
      "order_status": "ordered",
      "quantity": product.orderQuantity
    };
    this.orderService.addOrder(reqobj).subscribe(
      (response: any) => {
        alert('order added succesfully...');
        this.ngOnInit();
      },
      (error) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.isLoader = false;
      },
    );
  }

  manageQuantity(data: any) {
    if (data.operation === 'add' && data.prduct.quantity_available > data.prduct.orderQuantity) {
      data.prduct.orderQuantity += 1; 
    }
    if (data.operation === 'remove' && data.prduct.orderQuantity >= 2) {
      data.prduct.orderQuantity -= 1;       
    }
  }

}
