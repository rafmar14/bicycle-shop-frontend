import { ProductComponent } from '@/shared/domain/ProductComponent';
import { Product } from '@/shared/domain/Product';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { Category } from '@/shared/domain/Category';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProductService } from '@/product/service/product.service';
import { CategoryService } from '@/shared/service/category/category.service';

@Component({
  selector: 'app-configuration-dialog',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule, InputNumberModule, AutoCompleteModule, FormsModule],
  templateUrl: './configuration-dialog.component.html',
  styleUrl: './configuration-dialog.component.scss'
})
export class ConfigurationDialogComponent {
  
  @Input() visible: boolean = false;
  @Input() formData: ProductComponent = {
    name: '',
    fieldType: '',
    basePrice: 0,
    category: {
      name: '',
      components: []
    },
    product: {
      id: 0,
      name: ''
    }
  };
  @Output() onSave = new EventEmitter<ProductComponent>();
  @Output() onCancel = new EventEmitter<void>();

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  getProducts(event: any): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    })
  }

  getCategories(event: any): void {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
    })
  }

  save(): void {
    this.onSave.emit(this.formData);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  isValidForm(): boolean {
    return this.formData.name.trim() !== '';
  }
}
