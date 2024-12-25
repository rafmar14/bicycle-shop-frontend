import { Component } from '@angular/core';
import { ProductTableComponent } from '../product-table/product-table.component';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '@/product/service/product.service';
import { Product } from '@/product/domain/Product';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [ProductTableComponent, ButtonModule, ConfigurationDialogComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
  providers: [ProductService]
})
export class ConfigurationComponent {
  
  dataSource: Product[] = [];
  selectedProducts: Product[] = [];

  displayDialog: boolean = false;
  formData: Product = { name: '' };

  constructor(private productService: ProductService) {
    this.loadData();
  }

  onSelectedProductsChange(selected: Product[]): void {
    this.selectedProducts = selected;
  }

  loadData(): void {
    this.productService.getProducts().subscribe(data => {
      this.dataSource = data;
    });
  }

  openDialog(): void {
    this.formData = { name: '' };
    this.displayDialog = true;
  }

  saveData(newData: Product): void {
    this.dataSource = [...this.dataSource, newData];
    this.productService.createProduct(newData).subscribe(
      (producto: Product) => {
        this.loadData();
        this.displayDialog = false;
      })
  }

  cancelDialog(): void {
    this.displayDialog = false;
  }

  deleteProduct(): void {
    console.table(this.selectedProducts)
    const ids = this.selectedProducts.map(prod=>prod.id)
    this.productService.deleteProducts(ids)
    this.dataSource = this.dataSource.filter(item => !ids.includes(item.id))
    this.selectedProducts = []
  }
}
