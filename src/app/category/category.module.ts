import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../shared/service/category/category.service';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@/shared/shared.module';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
    providers: [ CategoryService ],
})
export class CategoryModule { }
