import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { AppSetting } from '../common/appsetting.constant';
import { CommonApiFuncService } from './common-api-func.service';
import { CommonService } from './common.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private commonAPIFuncService: CommonApiFuncService,
    private commonService: CommonService,
  ) { }

  login(reqObj: any) {
    // return this.commonAPIFuncService.post(AppSetting.login.userlogin, reqObj.data).pipe(
    //   tap((_) => this.commonService.log(`LoginService: login successful`)),
    //   catchError(this.commonService.handleError('LoginService: login failed')),
    // );
    return this.commonAPIFuncService.get(AppSetting.login.userlogin + this.commonService.buildQuery(reqObj.data)).pipe(
      tap((_) => this.commonService.log(`LoginService: login successful`)),
      catchError(this.commonService.handleError('LoginService: login failed')),
    );
  }
}
