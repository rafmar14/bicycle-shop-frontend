import { Product } from '@/shared/domain/Product';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AutoComplete, AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumber, InputNumberModule } from 'primeng/inputnumber';
import { ProductService } from '@/product/service/product.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductComponent } from '@/shared/domain/ProductComponent';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, AutoCompleteModule, FormsModule, InputNumberModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product : Product = {name: ""}
  components: ProductComponent[] = []
  formData : { [key: string]: any } = {};

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

  onSubmit() {}
}
