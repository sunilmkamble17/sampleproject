import { Component, OnInit } from '@angular/core';
import { StorageType } from 'src/app/common/enum/storage.enum';
import { Exception } from 'src/app/common/exception';
import { OrderService } from 'src/app/services/order.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-display-order',
  templateUrl: './display-order.component.html',
  styleUrls: ['./display-order.component.scss']
})
export class DisplayOrderComponent implements OnInit {

  isLoader = false;
  orderList: any;
  loggedInUserDetails: any = {};

  constructor(
    private orderService: OrderService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    let temp:any = this.storageService.get(StorageType.session, 'auth');
    this.loggedInUserDetails = JSON.parse(temp);
    this.getAllOrder();
  }

  getAllOrder() {
    const reqobj: any = {};
    reqobj.data = {
      email: this.loggedInUserDetails.email,
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
