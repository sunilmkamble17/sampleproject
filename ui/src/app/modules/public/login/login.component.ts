import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageType } from 'src/app/common/enum/storage.enum';
import { Exception } from 'src/app/common/exception';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { ValidationConstant } from 'src/app/services/validation/validation.constant';
import { Validator } from 'src/app/services/validation/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formErrors: any = {};
  validator: Validator;
  showPassword = false;
  loginLoader = false;
  config = {
    userName: {
      required: { name: ValidationConstant.login.username.name },
      maxlength: {
        name: ValidationConstant.login.username.name,
        max: ValidationConstant.login.username.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.login.username.name,
        min: ValidationConstant.login.username.minLength.toString(),
      },
    },
    password: {
      required: { name: ValidationConstant.login.password.name },
      maxlength: {
        name: ValidationConstant.login.password.name,
        max: ValidationConstant.login.password.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.login.password.name,
        min: ValidationConstant.login.password.minLength.toString(),
      },
    },
  };
  loginForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService,

    ) { 
      this.validator = new Validator(this.config);
    }

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }
    this.formErrors = this.validator.validate(this.loginForm);
  }

  redirectToForgotPwd() {
    this.router.navigate(['/forgot-password']);
  }

  redirectToSignUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.validator.validateAllFormFields(this.loginForm);
    this.formErrors = this.validator.validate(this.loginForm);
    if (this.loginForm.invalid) {
      return;
    }
    this.loginLoader = true;
    const reqObj: any = {};
    reqObj.data = {
      email: this.loginForm.value.userName,
      pwd: this.loginForm.value.password
    }
    this.loginService.login(reqObj).subscribe(
      (loginResponse: any) => {
        if (loginResponse.changePassword) {
          this.router.navigate(['/reset-password', loginResponse.userName]);
        } else {
          this.storageService.save(StorageType.session, 'auth', JSON.stringify(loginResponse));
          this.router.navigate(['/dashboard']);
        }

      },
      (error) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.loginLoader = false;
      },
    );
  }

}
