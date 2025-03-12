import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridListComponent } from './product-grid-list.component';

describe('ProductGridListComponent', () => {
  let component: ProductGridListComponent;
  let fixture: ComponentFixture<ProductGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
