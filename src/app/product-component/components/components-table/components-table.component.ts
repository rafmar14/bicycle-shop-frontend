import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@/product-component/domain/ProductComponent';

@Component({
  selector: 'app-component-table',
  standalone: true,
  imports: [TableModule, FormsModule, CommonModule],
  templateUrl: './components-table.component.html',
  styleUrl: './components-table.component.scss',
})
export class ComponentTableComponent {
  @Input() dataSource: ProductComponent[] = [];

  @Output() selectedComponentsChange = new EventEmitter<ProductComponent[]>();
  
  selectedComponents: ProductComponent[] = []

  onSelectedComponents(event: any[]): void {
    this.selectedComponentsChange.emit(this.selectedComponents);
  }
}
