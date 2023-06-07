import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
  test =
    'https://weatherapi-com.p.rapidapi.com/current.json?q=13.067439,80.237617';
 foreCast = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3'
    constructor(private _http: HttpClient) {}

  getRealTimeWeather() {
    // let headersToSend = new HttpHeaders();
    // headersToSend.set(
    //   'X-RapidAPI-Key',
    //   'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX'
    // );
    // headersToSend.set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    // const headers = new HttpHeaders({
    //   'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
    //   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    // });
    return this._http.get(this.test);
  }

  getForeCastDetails(){
    return this._http.get(this.foreCast)
  }

  getJsonPlaceHolderUsers(){
    return this._http.get("https://jsonplaceholder.typicode.com/users")
  }
}
