import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewEditComponent } from './product-overview-edit.component';

describe('ProductOverviewEditComponent', () => {
  let component: ProductOverviewEditComponent;
  let fixture: ComponentFixture<ProductOverviewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
