import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products: ProductComponent[] = [];
  private subscription = Subscription;

  constructor( private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.products = this.shoppingCartService.getAll();

    this.shoppingCartService.producstInCartChanged
    .subscribe((products: ProductComponent[]) => {
      this.products = products;
    });
  }

  public remove(index: number){
    this.shoppingCartService.delete(index);
  }

}
