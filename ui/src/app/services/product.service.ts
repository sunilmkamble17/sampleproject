import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { AppSetting } from '../common/appsetting.constant';
import { CommonApiFuncService } from './common-api-func.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private commonAPIFuncService: CommonApiFuncService,
    private commonService: CommonService,
  ) { }

  addProduct(reqObj: any) {
    return this.commonAPIFuncService.post(AppSetting.product.addProduct, reqObj.data).pipe(
      tap((_) => this.commonService.log(`ProductService: addProduct successful`)),
      catchError(this.commonService.handleError('ProductService: addProduct failed')),
    );
  }

  getAllProduct(reqObj: any) {
    return this.commonAPIFuncService.get(AppSetting.product.getAllProduct + this.commonService.buildQuery(reqObj.data)).pipe(
      tap((_) => this.commonService.log(`ProductService: getAllProduct successful`)),
      catchError(this.commonService.handleError('ProductService: getAllProduct failed')),
    );
  }
}
