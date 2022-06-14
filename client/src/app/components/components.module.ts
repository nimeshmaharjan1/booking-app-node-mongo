import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedHotelComponent } from './featured-hotel/featured-hotel.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [FeaturedHotelComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [FeaturedHotelComponent, NavbarComponent],
})
export class ComponentsModule {}
