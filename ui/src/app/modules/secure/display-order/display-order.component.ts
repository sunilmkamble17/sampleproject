import { Component, OnInit } from '@angular/core';
import { Exception } from 'src/app/common/exception';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.scss']
})
export class DisplayOrderComponent implements OnInit {

  isLoader = false;
  orderList: any;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder() {
    const reqobj: any = {};
    reqobj.data = {
      // email: `mahesh.walke@forcepoint.com`,
      email: `sunil.kamble@forcepoint.com`,
    };
    this.orderService.getAllOrder(reqobj).subscribe(
      (response: any) => {
        this.orderList = response.Data;
        console.log(this.orderList)
      },
      (error) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.isLoader = false;
      },
    );
  }

}
