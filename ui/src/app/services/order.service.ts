import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { AppSetting } from '../common/appsetting.constant';
import { CommonApiFuncService } from './common-api-func.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private commonAPIFuncService: CommonApiFuncService,
    private commonService: CommonService,
  ) { }

  addOrder(reqObj: any) {
    return this.commonAPIFuncService.post(AppSetting.order.addOrder, reqObj.data).pipe(
      tap((_) => this.commonService.log(`OrderService: addOrder successful`)),
      catchError(this.commonService.handleError('OrderService: addOrder failed')),
    );
  }

  getAllOrder(reqObj: any) {
    return this.commonAPIFuncService.get(AppSetting.order.getAllOrder + this.commonService.buildQuery(reqObj.data)).pipe(
      tap((_) => this.commonService.log(`OrderService: getAllOrder successful`)),
      catchError(this.commonService.handleError('OrderService: getAllOrder failed')),
    );
  }
}
