import { Component, Inject } from '@angular/core';

export class ProductComponent {

  constructor(
    @Inject(String) public title: string,
    @Inject(String) public description: string,
    @Inject(Number) public price: number,
  ){}

}
