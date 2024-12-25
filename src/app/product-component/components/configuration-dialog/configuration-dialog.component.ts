import { ProductComponent } from '@/product-component/domain/ProductComponent';
import { Product } from '@/product/domain/Product';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-configuration-dialog',
  standalone: true,
  imports: [Dialog, ButtonModule, InputTextModule, InputNumberModule, FormsModule],
  templateUrl: './configuration-dialog.component.html',
  styleUrl: './configuration-dialog.component.scss'
})
export class ConfigurationDialogComponent {
  
  @Input() visible: boolean = false;
  @Input() formData!: ProductComponent;
  @Output() onSave = new EventEmitter<ProductComponent>();
  @Output() onCancel = new EventEmitter<void>();

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
