import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './service/product.service';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '@/shared/shared.module';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [ ProductService ],
  exports: [ ]
})
export class ProductModule { }
