import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHotelComponent } from './featured-hotel.component';

describe('FeaturedHotelComponent', () => {
  let component: FeaturedHotelComponent;
  let fixture: ComponentFixture<FeaturedHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
