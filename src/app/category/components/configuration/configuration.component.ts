import { Component } from '@angular/core';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';
import { ButtonModule } from 'primeng/button';
import { CategoryService } from '@/shared/service/category/category.service';
import { Category } from '@/shared/domain/Category';
import { CategoryTableComponent } from '../category-table/category-table.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CategoryTableComponent, ButtonModule, ConfigurationDialogComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
  providers: [CategoryService]
})
export class ConfigurationComponent {
  
  dataSource: Category[] = [];
  selectedCategories: Category[] = [];

  displayDialog: boolean = false;
  formData: Category = {
    name: '',
    components: []
  };

  constructor(private categoryService: CategoryService) {
    this.loadData();
  }

  onSelectedCategoriesChange(selected: Category[]): void {
    this.selectedCategories = selected;
  }

  loadData(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.dataSource = data;
    });
  }

  openDialog(): void {
    this.formData = { name: '', components:[] };
    this.displayDialog = true;
  }

  saveData(newData: Category): void {
    this.dataSource = [...this.dataSource, newData];
    this.categoryService.createCategory(newData).subscribe(
      (categoryo: Category) => {
        this.loadData();
        this.displayDialog = false;
      })
  }

  cancelDialog(): void {
    this.displayDialog = false;
  }

  deleteCategory(): void {
    console.table(this.selectedCategories)
    const ids = this.selectedCategories.map(cat=>cat.id)
    this.categoryService.deleteCategories(ids)
    this.dataSource = this.dataSource.filter(item => !ids.includes(item.id))
    this.selectedCategories = []
  }
}
