import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'components', loadChildren: () => import('./product-component/product-component.module').then(m => m.ProductComponentModule) }
];