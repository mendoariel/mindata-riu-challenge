import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalImages } from './horizontal-images';

describe('HorizontalImages', () => {
  let component: HorizontalImages;
  let fixture: ComponentFixture<HorizontalImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalImages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
