import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Exception } from 'src/app/common/exception';
import { ProductService } from 'src/app/services/product.service';
import { ValidationConstant } from 'src/app/services/validation/validation.constant';
import { Validator } from 'src/app/services/validation/validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @ViewChild('closeModal') closeModal!: ElementRef

  formErrors: any = {};
  validator: Validator;
  isLoader = false;
  config = {
    name: {
      required: { name: ValidationConstant.product.name.name },
      maxlength: {
        name: ValidationConstant.product.name.name,
        max: ValidationConstant.product.name.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.product.name.name,
        min: ValidationConstant.product.name.minLength.toString(),
      },
    },
    price: {
      required: { name: ValidationConstant.product.price.name },
      maxlength: {
        name: ValidationConstant.product.price.name,
        max: ValidationConstant.product.price.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.product.price.name,
        min: ValidationConstant.product.price.minLength.toString(),
      },
    },
    quantity: {
      required: { name: ValidationConstant.product.quantity.name },
      maxlength: {
        name: ValidationConstant.product.quantity.name,
        max: ValidationConstant.product.quantity.maxLength.toString(),
      },
      minlength: {
        name: ValidationConstant.product.quantity.name,
        min: ValidationConstant.product.quantity.minLength.toString(),
      },
    },
  };
  addProductForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.validator = new Validator(this.config);
   }

  ngOnInit(): void {
  }

  addProduct() {
    this.validator.validateAllFormFields(this.addProductForm);
    this.formErrors = this.validator.validate(this.addProductForm);
    if (this.addProductForm.invalid) {
      return;
    }
    this.isLoader = true;
    const reqObj: any = {};
    reqObj.data = {
      prod_name: this.addProductForm.value.name,
      price: this.addProductForm.value.price,
      quantity_available: this.addProductForm.value.quantity,
      supplier_email: "mahesh.walke@forcepoint.com"
    }
    this.productService.addProduct(reqObj).subscribe(
      (response: any) => {
        alert("Product Added successfully...");
        this.closeModal.nativeElement.click(); 
      },
      (error) => {
        const toastMessage = Exception.exceptionMessage(error);
        alert(toastMessage);
        this.isLoader = false;
      },
    );
  }




}
