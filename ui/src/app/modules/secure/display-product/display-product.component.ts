import { Component, OnInit } from '@angular/core';
import { Exception } from 'src/app/common/exception';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.scss']
})
export class DisplayProductComponent implements OnInit {

  isLoader = false;
  productList: any;

  constructor(
    private productService: ProductService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    const reqobj: any = {};
    reqobj.data = {
      email: `mahesh.walke@forcepoint.com`,
      tab: `published`,
    };
    this.productService.getAllProduct(reqobj).subscribe(
      (response: any) => {
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

  AddOrder() {
    const reqobj: any = {};
    reqobj.data = {
      "email": "mahesh.walke@forcepoint.com",
      "item_id": "11",
      "order_status": "ordered",
      "quantity": "1"
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

}
