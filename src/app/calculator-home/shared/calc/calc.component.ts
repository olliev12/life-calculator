import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, ValidatorFn, FormBuilder } from '@angular/forms';
import { FormConfig } from './../../../config/app-config';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {
  @Input() formConfig!: FormConfig; // The form configuration object
  @Output() formSubmitted: EventEmitter<FormConfig[]> = new EventEmitter<FormConfig[]>();
  form!: FormGroup;
  fields: any[] = [];

  constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   const formGroup: object = {};
  //   for (let field of this.formConfig) {
  //     (formGroup as any)[field.name] = new FormControl(field.value || '', field.validators || []);
  //   }
  //   this.form = new FormGroup(formGroup);
  // }
  ngOnInit() {
    this.form = this.createFormGroup();
    this.fields = this.createFields();
  }

  createFormGroup() {
    const formGroupConfig = {};
    for (const key in this.formConfig) {
      const validators: ValidatorFn[] = this.formConfig[key]['validators'];
      (formGroupConfig as any)[key] = [
        this.formConfig[key]['value'] || '',
        Validators.compose(validators)
      ];
    }
    return this.fb.group(formGroupConfig);
  }

  createFields() {
    const fields = [];
    for (const key in this.formConfig) {
      fields.push({
        key,
        label: this.formConfig[key]['label'],
        type: this.formConfig[key]['type'],
        selectOptions: this.formConfig[key]['selectOptions'], // add selectOptions property for dropdown fields
        radioOptions: this.formConfig[key]['radioOptions'] // add radioOptions property for radio button fields
      });
    }
    return fields;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
