import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}
  public getProperties() {
    return this.http.get('http://localhost:5000/api/hotels/countByType');
  }
}
