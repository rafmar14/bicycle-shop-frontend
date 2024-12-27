import { Component } from '@angular/core';
import { ComponentTableComponent } from '../components-table/components-table.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '@/product/service/product.service';
import { ProductComponent } from '@/shared/domain/ProductComponent';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';
import { ProductComponentService } from '@/shared/service/product-component/product-component.service';

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
    this.service.getProductComponents().subscribe((data) => {
      this.dataSource = data;
    });
  }

  openDialog(): void {
    this.formData = {
      name: "",
      basePrice: 0,
      product: {
        name: ''
      },
      category: {
        id: 0,
        name: '',
        components: []
      },
      available: false
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
