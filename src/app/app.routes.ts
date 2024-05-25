import { Routes } from '@angular/router';
import { AddNewProductComponent } from './components/products/add-new-product/add-new-product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'add-product', component: AddNewProductComponent },
];
