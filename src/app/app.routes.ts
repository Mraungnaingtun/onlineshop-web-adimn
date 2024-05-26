import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { AddNewProductComponent } from './components/products/add-new-product/add-new-product.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'add-product', component: AddNewProductComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'orders', component: OrderListComponent },
    { path: 'customers', component: CustomerListComponent },//CustomerListComponent
];
