import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';

const routes: Routes = [
  { path: '', component: LateralMenuComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConfigurationModule { }
