import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/domain/Product';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storageKey = 'selectedProduct';

  constructor(private http: HttpClient) { }

  setSelectedProduct(product: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(product));
  }

  getSelectedProduct() : Product {
    const product = localStorage.getItem(this.storageKey);
    return product ? JSON.parse(product) : null;
  }

  clearSelectedProduct() {
    localStorage.removeItem(this.storageKey);
  }

  getProducts() {
    return this.http.get<Product[]>(environment.baseUrl + 'products')
  }

  createProduct(product: Product) {
    return this.http.post<Product>(environment.baseUrl + 'products', product)
  }

  deleteProducts(productIds: (number | undefined)[]) {
    const deleteRequests = productIds
    .filter(id => id !== undefined)
    .map(id => this.http.delete<Product>(`${environment.baseUrl}products/${id}`))
    
    forkJoin(deleteRequests).subscribe(
      () => console.log('Todos los productos han sido eliminados')
    );
  }

}
