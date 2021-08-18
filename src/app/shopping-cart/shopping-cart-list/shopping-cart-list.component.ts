import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductComponent } from 'src/app/product/product.component';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  @Input() public products: ProductComponent[] = [];
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public onRemoveItemFromList(index: number){
    this.delete.emit(index);
  }

}
