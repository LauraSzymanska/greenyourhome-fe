import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRowListComponent } from './product-row-list.component';

describe('ProductRowListComponent', () => {
  let component: ProductRowListComponent;
  let fixture: ComponentFixture<ProductRowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRowListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
