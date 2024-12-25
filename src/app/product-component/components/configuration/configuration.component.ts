import { Component } from '@angular/core';
import { ComponentTableComponent } from '../components-table/components-table.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '@/product/service/product.service';
import { Product } from '@/product/domain/Product';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';
import { ProductComponent } from '@/product-component/domain/ProductComponent';
import { ProductComponentService } from '@/product-component/service/product-component.service';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [ComponentTableComponent, ButtonModule, ConfigurationDialogComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
  providers: [ProductService]
})
export class ConfigurationComponent {
  
  dataSource: ProductComponent[] = [];
  selectedProductComponents: ProductComponent[] = [];

  displayDialog: boolean = false;
  formData!: ProductComponent;

  constructor(private service: ProductComponentService) {
    this.loadData();
  }

  onSelectedComponentsChange(selected: ProductComponent[]): void {
    this.selectedProductComponents = selected;
  }

  loadData(): void {
    this.service.getProductComponents().subscribe(data => {
      this.dataSource = data;
    });
  }

  openDialog(): void {
    this.formData = {
      name: "",
      fieldType: "",
      basePrice: 0
     };
    this.displayDialog = true;
  }

  saveData(newData: ProductComponent): void {
    this.dataSource = [...this.dataSource, newData];
    this.service.createProductComponent(newData).subscribe(
      (component: ProductComponent) => {
        this.loadData();
        this.displayDialog = false;
      })
  }

  cancelDialog(): void {
    this.displayDialog = false;
  }

  deleteProductComponent(): void {
    console.table(this.selectedProductComponents)
    const ids = this.selectedProductComponents.map(comp=>comp.id)
    this.service.deleteProductComponents(ids)
    this.dataSource = this.dataSource.filter(item => !ids.includes(item.id))
    this.selectedProductComponents = []
  }
}
