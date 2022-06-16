import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Exception } from 'src/app/common/exception';
import { CommonService } from 'src/app/services/common.service';
import { RegisterService } from 'src/app/services/register.service';
import { ValidationConstant } from 'src/app/services/validation/validation.constant';
import { Validator } from 'src/app/services/validation/validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  formErrors: any = {};
  validator: Validator;
  showPassword = false;
  signupLoader = false;
  config = {
    email: {
      required: { name: ValidationConstant.signup.email.name },
      maxlength: {
        name: ValidationConstant.signup.email.name,
        max: ValidationConstant.signup.email.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.signup.email.name,
        min: ValidationConstant.signup.email.minLength.toString(),
      },
    },
    firstName: {
      required: { name: ValidationConstant.signup.firstName.name },
      maxlength: {
        name: ValidationConstant.signup.firstName.name,
        max: ValidationConstant.signup.firstName.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.signup.firstName.name,
        min: ValidationConstant.signup.firstName.minLength.toString(),
      },
    },
    lastName: {
      required: { name: ValidationConstant.signup.lastName.name },
      maxlength: {
        name: ValidationConstant.signup.lastName.name,
        max: ValidationConstant.signup.lastName.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.signup.lastName.name,
        min: ValidationConstant.signup.lastName.minLength.toString(),
      },
    },
    password: {
      required: { name: ValidationConstant.signup.password.name },
      maxlength: {
        name: ValidationConstant.signup.password.name,
        max: ValidationConstant.signup.password.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.signup.password.name,
        min: ValidationConstant.signup.password.minLength.toString(),
      },
    },
    confirmPassword: {
      required: { name: ValidationConstant.signup.confirmPassword.name },
      maxlength: {
        name: ValidationConstant.signup.confirmPassword.name,
        max: ValidationConstant.signup.confirmPassword.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.signup.confirmPassword.name,
        min: ValidationConstant.signup.confirmPassword.minLength.toString(),
      },
    },
  };
  signupForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private registerService: RegisterService,
  ) {
    this.validator = new Validator(this.config);
   }

  ngOnInit(): void {
    this.signupForm.valueChanges.subscribe((data) => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.signupForm) {
      return;
    }
    this.formErrors = this.validator.validate(this.signupForm);
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  signup() {
    this.validator.validateAllFormFields(this.signupForm);
    this.formErrors = this.validator.validate(this.signupForm);
    if (this.signupForm.invalid) {
      return;
    }
    this.signupLoader = true;
    const reqObj: any = {};
    reqObj.data = {
      email: this.commonService.encryptData(this.signupForm.value.email),
      fname: this.signupForm.value.firstName,
      lname: this.signupForm.value.lastName,
      pwd: this.commonService.encryptData(this.signupForm.value.password)
    }
    this.registerService.register(reqObj).subscribe(
      (registerResponse: any) => {
        if (registerResponse.Success === false || registerResponse.Message === "User already exists!") {
          alert(registerResponse.Message);
          return;
        }
        this.router.navigate(['/login']);
      },
      (error: any) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.signupLoader = false;
      },
    );
  }

}
