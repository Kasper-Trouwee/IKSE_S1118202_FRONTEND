import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public producstInCartChanged: Subject<ProductComponent[]> = new Subject<ProductComponent[]>();
  private productsInCart: ProductComponent[] = [];

  constructor() { }

  public add(product: ProductComponent){
    this.productsInCart.push(product);
    this.producstInCartChanged.next(this.productsInCart.slice());
  }

  public delete(index: number){
    if(index > -1){
      this.productsInCart.splice(index, 1);
      this.producstInCartChanged.next(this.productsInCart);
    }
  }

  public getAll(): ProductComponent[]{
    return this.productsInCart.slice();
  }
}
