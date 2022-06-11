import { NgForm, FormGroup, AbstractControl, FormControl } from '@angular/forms';
import { Messages } from './messages.constant';

interface Config {
  [key: string]: {
    [key: string]: { [key: string]: string };
  };
}

export class Validator {
  config: Config;
  formErrors: any = {};

  constructor(config: Config) {
    this.config = config;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  validate(ngForm: NgForm | FormGroup) {
    this.formErrors = {};
    // Validate multilevel form's  validation (Used recursive)
    this.findChildrenAndValidate(ngForm, '');
    return this.formErrors;
  }

  private findChildrenAndValidate(obj: any, fieldName: any) {
    if (typeof obj.controls !== 'undefined') {
      const newObj = Object.keys(obj.controls);
      for (const i in newObj) {
        if (i) {
          this.findChildrenAndValidate(obj.controls[newObj[i]], newObj[i]);
        }
      }
    } else {
      if (obj && obj.dirty && !obj.valid && obj.errors !== null) {
        Object.keys(obj.errors).forEach((ek: string) => {
          // let key = fieldName as keyof typeof this.formErrors;
          this.formErrors[fieldName] = this.replacedToArgs(Messages[ek], this.config[fieldName][ek]) + ' ';
        });
      }
    }
  }

  private replacedToArgs(message: string, args: { [key: string]: string }) {
    if (args !== undefined) {
      Object.keys(args).forEach((arg) => {
        message = message.replace(new RegExp(`{${arg}}`, 'g'), args[arg]);
      });
      return message;
    }
    return message;
  }
}
