import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location:any){
      return this.http.get(
          'https://api.weatherstack.com/current?access_key=f32681ea79a6d97ab5863a3c89fd1ae1&q=' + location
      );
  }
}
