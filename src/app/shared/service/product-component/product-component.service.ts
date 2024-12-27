import { ProductComponent } from '@/shared/domain/ProductComponent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductComponentService {

  private storageKey = 'selectedProductComponent';

  constructor(private http: HttpClient) { }

  setSelectedProductComponent(component: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(component));
  }

  getSelectedProductComponent() {
    const component = localStorage.getItem(this.storageKey);
    return component ? JSON.parse(component) : null;
  }

  clearSelectedProductComponent() {
    localStorage.removeItem(this.storageKey);
  }

  getProductComponents() {
    return this.http.get<ProductComponent[]>(environment.baseUrl + 'components')
  }

  getProductComponentsByCategoryByProduct(idCategory: number, idProduct: number) {
    return this.http.get<ProductComponent[]>(`${environment.baseUrl}components/category/${idCategory}/product/${idProduct}`)
  }

  createProductComponent(component: ProductComponent) {
    return this.http.post<ProductComponent>(environment.baseUrl + 'components', component)
  }

  deleteProductComponents(componentIds: (number | undefined)[]) {
    const deleteRequests = componentIds
    .filter(id => id !== undefined)
    .map(id => this.http.delete<ProductComponent>(`${environment.baseUrl}components/${id}`))
    
    forkJoin(deleteRequests).subscribe(
      () => console.log('Todos los componentes han sido eliminados')
    );
  }

}
