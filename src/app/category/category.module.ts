import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './service/category.service';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'configuration', component: ConfigurationComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
    providers: [ CategoryService ],
})
export class CategoryModule { }
