import { Component, EventEmitter, Input, Output } from '@angular/core';
import {KeyValue} from '@angular/common';
import { FormGroup, Validators, ValidatorFn, FormBuilder } from '@angular/forms';
import { FormConfig } from './../../../config/app-config';

export enum ErrorMessages {
  minlength = 'minlength',
  required = 'required',
  email = 'email'
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  // @Input() formConfig!: FormConfig; // The form configuration object
  // @Output() formSubmitted: EventEmitter<FormConfig[]> = new EventEmitter<FormConfig[]>();
  // form!: FormGroup;
  // fields: any[] = [];

  // constructor(private fb: FormBuilder) {}

  // // ngOnInit() {
  // //   const formGroup: object = {};
  // //   for (let field of this.formConfig) {
  // //     (formGroup as any)[field.name] = new FormControl(field.value || '', field.validators || []);
  // //   }
  // //   this.form = new FormGroup(formGroup);
  // // }
  // ngOnInit() {
  //   this.form = this.createFormGroup();
  //   this.fields = this.createFields();
  // }

  // createFormGroup() {
  //   const formGroupConfig = {};
  //   for (const key in this.formConfig) {
  //     const validators: ValidatorFn[] = this.formConfig[key]['validators'];
  //     (formGroupConfig as any)[key] = [
  //       this.formConfig[key]['value'] || '',
  //       Validators.compose(validators)
  //     ];
  //   }
  //   return this.fb.group(formGroupConfig);
  // }

  // createFields() {
  //   const fields = [];
  //   for (const key in this.formConfig) {
  //     fields.push({
  //       key,
  //       label: this.formConfig[key]['label'],
  //       type: this.formConfig[key]['type'],
  //       selectOptions: this.formConfig[key]['selectOptions'], // add selectOptions property for dropdown fields
  //       radioOptions: this.formConfig[key]['radioOptions'] // add radioOptions property for radio button fields
  //     });
  //   }
  //   return fields;
  // }

  // onSubmit() {
  //   console.log(this.form.value);
  //   this.formSubmitted.emit(this.form.value)
  // }

  @Input() formConfig!: FormConfig;
  @Input() submitText: string = 'Calculate';
  @Output() submitForm = new EventEmitter<FormGroup>();
  fields: [string,any][] = [];

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const formFields = {};

    for (const [key, field] of Object.entries(this.formConfig)) {
      (formFields as any)[key] = [field.value || '', field.validators];
    }
    this.fields = Object.entries(this.formConfig);

    this.form = this.fb.group(formFields);
  }

  onSubmit() {
    this.submitForm.emit(this.form);
    console.log(this.form.controls)
    // console.log(this.form.value)
  }

  getErrorMessage(error: KeyValue<string, any>, fieldName: string) {
    let message: string = '';
    switch (error.key) {
      case ErrorMessages.minlength:
        message = `${fieldName} must be of minimum length ${error.value['requiredLength']}`;
        break;
      case ErrorMessages.email:
        message = `Email format incorrect`;
        break;
      case ErrorMessages.required:
      default:
        message = `${fieldName} is required`;
        break;
    }
    return message;
  }
}
