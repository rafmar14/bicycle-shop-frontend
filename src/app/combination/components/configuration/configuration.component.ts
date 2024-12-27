import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CombinationTableComponent } from '../components-table/components-table.component';
import { Combination } from '@/shared/domain/Combination';
import { CombinationService } from '@/shared/service/combination/combination.service';
import { ProductCombination } from '@/shared/domain/ProductCombination';
import { ConfigurationDialogComponent } from '../configuration-dialog/configuration-dialog.component';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CombinationTableComponent, ButtonModule, ConfigurationDialogComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss',
  providers: [CombinationService]
})
export class ConfigurationComponent {
  
  dataSource: Combination[] = [];
  selectedCombinations: Combination[] = [];

  displayDialog: boolean = false;
  formData!: ProductCombination;

  constructor(private service: CombinationService) {
    this.loadData();
  }

  onSelectedCombinationChange(selected: Combination[]): void {
    this.selectedCombinations = selected;
  }

  loadData(): void {
    this.service.getCombinations().subscribe(data => {
      this.dataSource = data;
    });
  }

  openDialog(): void {
    this.formData = {
      product: {
        name: ''
      },
      combination: {
        compA: {
          name: '',
          basePrice: 0,
          category: {
            id: 0,
            name: '',
            components: []
          },
          product: {
            id: 0,
            name: ''
          }
        },
        compB: {
          name: '',
          basePrice: 0,
          category: {
            id: 0,
            name: '',
            components: []
          },
          product: {
            id: undefined,
            name: ''
          }
        },
        compatible: false,
        priceAdjustment: 0
      }
    };
    this.displayDialog = true;
  }

  saveData(newData: Combination): void {
    this.dataSource = [...this.dataSource, newData];
    this.service.createCombination(newData).subscribe(
      (component: Combination) => {
        this.loadData();
        this.displayDialog = false;
      })
  }

  cancelDialog(): void {
    this.displayDialog = false;
  }

  deleteCombination(): void {
    console.table(this.selectedCombinations)
    const ids = this.selectedCombinations.map(comp=>comp.id)
    this.service.deleteCombinations(ids)
    this.dataSource = this.dataSource.filter(item => !ids.includes(item.id))
    this.selectedCombinations = []
  }
}
