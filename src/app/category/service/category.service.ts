import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Category } from '../../shared/domain/Category';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private storageKey = 'selectedCategory';

  constructor(private http: HttpClient) { }

  setSelectedCategory(category: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(category));
  }

  getSelectedCategory() {
    const category = localStorage.getItem(this.storageKey);
    return category ? JSON.parse(category) : null;
  }

  clearSelectedCategory() {
    localStorage.removeItem(this.storageKey);
  }

  getCategories() {
    return this.http.get<Category[]>(environment.baseUrl + 'categories')
  }

  createCategory(category: Category) {
    return this.http.post<Category>(environment.baseUrl + 'categories', category)
  }

  deleteCategories(categoryIds: (number | undefined)[]) {
    const deleteRequests = categoryIds
    .filter(id => id !== undefined)
    .map(id => this.http.delete<Category>(`${environment.baseUrl}categories/${id}`))
    
    forkJoin(deleteRequests).subscribe(
      () => console.log('Todos los categories han sido eliminados')
    );
  }

}
