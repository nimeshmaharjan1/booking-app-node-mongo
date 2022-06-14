import { HotelService } from './../../services/hotel.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-hotel',
  templateUrl: './featured-hotel.component.html',
  styleUrls: ['./featured-hotel.component.scss'],
})
export class FeaturedHotelComponent implements OnInit {
  constructor(private hotelService: HotelService) {}
  @Input() image: any;
  @Input() property: any;
  @Input() count: any;
  properties: any;
  ngOnInit(): void {}
}
