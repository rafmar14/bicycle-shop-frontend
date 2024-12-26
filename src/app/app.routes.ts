import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'components', loadChildren: () => import('./product-component/product-component.module').then(m => m.ProductComponentModule) },
    { path: 'combinations', loadChildren: () => import('./combination/combination.module').then(m => m.CombinationModule) },
    { path: 'categories', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
    { path: 'configuration', loadChildren: () => import('./configuration/configuration.module').then(m => m.ConfigurationModule) }
];