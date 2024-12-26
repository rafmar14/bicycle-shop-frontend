import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '@/shared/domain/Product';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [TableModule, FormsModule, CommonModule],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  @Input() dataSource: Product[] = [];

  @Output() selectedProductsChange = new EventEmitter<Product[]>();
  
  selectedProducts: Product[] = []

  onSelectedProducts(event: any[]): void {
    this.selectedProductsChange.emit(this.selectedProducts);
  }
}
