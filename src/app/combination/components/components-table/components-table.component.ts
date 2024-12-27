import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Combination } from '@/shared/domain/Combination';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-component-table',
  standalone: true,
  imports: [TableModule, FormsModule, CommonModule, CheckboxModule],
  templateUrl: './components-table.component.html',
  styleUrl: './components-table.component.scss',
})
export class CombinationTableComponent {
  @Input() dataSource: Combination[] = [];

  @Output() selectedCombinationsChange = new EventEmitter<Combination[]>();
  
  selectedCombinations: Combination[] = []

  onSelectedCombinations(event: any[]): void {
    this.selectedCombinationsChange.emit(this.selectedCombinations);
  }
}
