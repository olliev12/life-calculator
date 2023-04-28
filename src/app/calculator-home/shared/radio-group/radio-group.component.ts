import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-group',
  template: `
    <div class="form-group">
      <label>{{ label }}</label>
      <div *ngFor="let option of options">
        <input
          type="radio"
          [name]="name"
          [value]="option.value"
          [checked]="value === option.value"
          (change)="onChange(option.value)"
        />
        {{ option.label }}
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  @Input() name!: string;
  @Input() label!: string;
  @Input() options: { label: string; value: any }[] = [];

  value: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
