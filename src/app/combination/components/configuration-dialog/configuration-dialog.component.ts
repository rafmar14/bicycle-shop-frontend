import { Combination } from '@/shared/domain/Combination';
import { ProductComponentService } from '@/product-component/service/product-component.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProductCombination } from '@/shared/domain/ProductCombination';
import { ProductService } from '@/product/service/product.service';
import { CategoryService } from '@/category/service/category.service';
import { Product } from '@/shared/domain/Product';
import { Category } from '@/shared/domain/Category';

@Component({
  selector: 'app-configuration-dialog',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule, InputNumberModule, AutoCompleteModule, FormsModule],
  templateUrl: './configuration-dialog.component.html',
  styleUrl: './configuration-dialog.component.scss'
})
export class ConfigurationDialogComponent {
  
  @Input() visible: boolean = false;
  @Input() formData!: ProductCombination;
  @Output() onSave = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<void>();
  
  components: any[] = [];
  products: Product[] = [];
  categories: Category[] = [];

  constructor(private componentService: ProductComponentService, private productService: ProductService, private categoryService: CategoryService) { }

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

  loadComponents(event: any): void {
    this.componentService.getProductComponents().subscribe((data) => {
      this.components = data;
    });
  }

  save(): void {
    this.onSave.emit(this.formData);
  }

  cancel(): void {
    this.onCancel.emit();
  }

  isValidForm(): boolean {
    return this.formData.combination.compA !== undefined 
    && this.formData.combination.compB !== undefined 
    && this.formData.combination.compatible !== undefined 
    && this.formData.combination.priceAdjustment !== undefined;
  }
}
