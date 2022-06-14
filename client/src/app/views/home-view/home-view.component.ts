import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent implements OnInit {
  constructor(private hotelService: HotelService) {}
  properties: any;
  ngOnInit(): void {
    this.hotelService.getProperties().subscribe({
      next: (data: any) => {
        this.properties = data;
        console.log(this.properties);
      },
    });
  }
}
