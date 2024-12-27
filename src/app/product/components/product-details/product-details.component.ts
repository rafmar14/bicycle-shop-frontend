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
import { Category } from '@/shared/domain/Category';
import { ProductComponentService } from '@/shared/service/product-component/product-component.service';
import { CategoryService } from '@/shared/service/category/category.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, AutoCompleteModule, FormsModule, InputNumberModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product : Product = {name: ""}
  categories: Category[] = []
  formData : { [key: string]: any } = {};

  constructor(private router: Router, private service: ProductService, private componentsService: ProductComponentService, private categoriesService: CategoryService) {
    
  }

  ngOnInit() {
    this.product = this.service.getSelectedProduct()
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  addToCart() {}

  getPrice() {
    return 100
  }

  getComponents(event: any, idCategory: number) {
    if (this.product.id) {
      this.componentsService.getProductComponentsByCategoryByProduct(idCategory, this.product.id!).subscribe(data => {
        if (this.categories.find(cat => idCategory === cat.id) !== undefined) {
          this.categories.find(cat => idCategory === cat.id)!.components = data
        }
      })
    }
  }

  search() {}

  onSubmit() {}
}
