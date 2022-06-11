import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayOrderComponent } from './display-order/display-order.component';
import { DisplayProductComponent } from './display-product/display-product.component';

export const SECURE_ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-product', component: AddProductComponent },
    { path: 'display-product', component: DisplayProductComponent },
    { path: 'display-order', component: DisplayOrderComponent },
];
