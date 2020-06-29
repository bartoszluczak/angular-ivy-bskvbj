import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { DetailsComponent} from './details/details.component'


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: ProductDetailsComponent},
  {path: 'productdetails/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
