import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Combination } from '@/shared/domain/Combination';

@Injectable({
  providedIn: 'root'
})
export class CombinationService {

  private storageKey = 'selectedCombination';

  constructor(private http: HttpClient) { }

  setSelectedCombination(component: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(component));
  }

  getSelectedCombination() {
    const component = localStorage.getItem(this.storageKey);
    return component ? JSON.parse(component) : null;
  }

  clearSelectedCombination() {
    localStorage.removeItem(this.storageKey);
  }

  getCombinations() {
    return this.http.get<Combination[]>(environment.baseUrl + 'components')
  }

  createCombination(component: Combination) {
    return this.http.post<Combination>(environment.baseUrl + 'components', component)
  }

  deleteCombinations(componentIds: (number | undefined)[]) {
    const deleteRequests = componentIds
    .filter(id => id !== undefined)
    .map(id => this.http.delete<Combination>(`${environment.baseUrl}components/${id}`))
    
    forkJoin(deleteRequests).subscribe(
      () => console.log('Todos los componentes han sido eliminados')
    );
  }

}
