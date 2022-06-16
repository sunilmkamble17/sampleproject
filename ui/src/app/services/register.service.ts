import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { AppSetting } from '../common/appsetting.constant';
import { CommonApiFuncService } from './common-api-func.service';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( 
    private commonAPIFuncService: CommonApiFuncService,
    private commonService: CommonService,
  ) { }
  
  register(reqObj: any) {
    return this.commonAPIFuncService.post(AppSetting.signup.register, reqObj.data).pipe(
      tap((_) => this.commonService.log(`RegisterService: register successful`)),
      catchError(this.commonService.handleError('RegisterService: register failed')),
    );
  }

}
