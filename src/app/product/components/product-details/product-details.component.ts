import { Product } from '@/product/domain/Product';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AutoComplete } from 'primeng/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { ProductService } from '@/product/service/product.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, AutoComplete, ReactiveFormsModule, InputNumber],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product : Product = {name: ""}
  form = {
    quantity: 0
  };

  constructor(private router: Router, private service: ProductService) {
  }

  ngOnInit() {
    this.product = this.service.getSelectedProduct()
  }

  addToCart() {}

  getPrice() {
    return 100
  }

  search() {}
}
