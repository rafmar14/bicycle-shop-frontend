import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponentService } from './service/product-component.service';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ ProductComponentService ]
})
export class ProductComponentModule { }
