import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css',
})
export class FormProductComponent {
  constructor(
    private fb: FormBuilder,
    private ProductService: ProductService
  ) {}

  formProduct = this.fb.group({
    title: [''],
    description: [''],
    category: [''],
    disponibility: [true],
  });

  onSubmit() {
    console.log(this.formProduct.value);
    this.ProductService.createProduct(this.formProduct.value).subscribe();
  }
}
