import { Component, OnInit } from '@angular/core';
import { Exception } from 'src/app/common/exception';
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
    private productService: ProductService
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

}
