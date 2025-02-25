import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHighlightsComponent } from './homepage-highlights.component';

describe('HomepageHighlightsComponent', () => {
  let component: HomepageHighlightsComponent;
  let fixture: ComponentFixture<HomepageHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageHighlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
