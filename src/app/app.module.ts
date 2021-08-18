import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductOverviewEditComponent } from './product-overview-edit/product-overview-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartListItemComponent } from './shopping-cart/shopping-cart-list/shopping-cart-list-item/shopping-cart-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductOverviewComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent,
    ProductOverviewEditComponent,
    ProductEditComponent,
    ShoppingCartComponent,
    ShoppingCartListComponent,
    ShoppingCartListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
