import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '@/shared/domain/Category';

@Component({
  selector: 'app-category-table',
  standalone: true,
  imports: [TableModule, FormsModule, CommonModule],
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
})
export class CategoryTableComponent {
  @Input() dataSource: Category[] = [];

  @Output() selectedCategoriesChange = new EventEmitter<Category[]>();
  
  selectedCategories: Category[] = []
  onSelectedCategories: any;

  onSelectedCategorys(event: any[]): void {
    this.selectedCategoriesChange.emit(this.selectedCategories);
  }
}
