import { Product } from '@/shared/domain/Product';
import { ProductService } from '@/product/service/product.service';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [ProductService]
})
export class ProductListComponent {

  products: Product[] = []

  constructor(private router: Router, private service: ProductService) {
    this.service.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  goToProduct(product: Product) {
    this.service.setSelectedProduct(product)
  }
}
