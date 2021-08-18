import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductOverviewEditComponent } from './product-overview-edit/product-overview-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'producten', pathMatch: 'full' },
  {path: 'producten', component: ProductOverviewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'producten/create', component: ProductCreateComponent},
  {path: 'producten/bewerken', component: ProductOverviewEditComponent},
  {path: 'producten/bewerken/edit', component: ProductEditComponent},
  {path: 'cart', component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
