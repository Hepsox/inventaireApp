import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NewProduct } from '../../models/newProduct.type';

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
    this.ProductService.createProduct(
      this.formProduct.value as NewProduct
    ).subscribe();
  }
}
