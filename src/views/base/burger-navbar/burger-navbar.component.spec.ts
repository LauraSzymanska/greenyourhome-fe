import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerNavbarComponent } from './burger-navbar.component';

describe('BurgerNavbarComponent', () => {
  let component: BurgerNavbarComponent;
  let fixture: ComponentFixture<BurgerNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
