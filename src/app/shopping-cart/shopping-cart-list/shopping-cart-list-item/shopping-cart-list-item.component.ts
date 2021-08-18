import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductComponent } from 'src/app/product/product.component';

@Component({
  selector: 'app-shopping-cart-list-item',
  templateUrl: './shopping-cart-list-item.component.html',
  styleUrls: ['./shopping-cart-list-item.component.css']
})
export class ShoppingCartListItemComponent implements OnInit {

  @Input() public product: ProductComponent;
  @Input() public index: number;
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public remove(){
    this.delete.emit(this.index);
  }

}
