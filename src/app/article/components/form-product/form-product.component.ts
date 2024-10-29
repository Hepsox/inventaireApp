import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css',
})
export class FormProductComponent {
  constructor(private fb: FormBuilder) {}

  formProduct = this.fb.group({
    title: [''],
    description: [''],
    category: [''],
    disponibility: [true],
  });

  onSubmit() {
    console.log(this.formProduct.value);
  }
}
