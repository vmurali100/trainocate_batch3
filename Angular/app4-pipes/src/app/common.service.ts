import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  exchangeApiUrl =
    'https://apidojo-booking-v1.p.rapidapi.com/currency/get-exchange-rates';
  quotesUrl =
    'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10';
    randomDataUrl="http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&date={date}&pretty=true"
  // headers = new HttpHeaders({
  //     'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
  //     'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com',
  //   });
  getEchangeRates() {
    return this._http.get(this.exchangeApiUrl);
  }
  getQuotesByFamousPeopls() {
    // const headers = new HttpHeaders({
    //   'X-RapidAPI-Key': 'IXEUAUo6gSmshyDa71pLNljSwKHRp1xt8bqjsn089SWjJ1GyuX',
    //   'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
    // });
    return this._http.get(this.quotesUrl);
  }
  getRandomData(){
    return this._http.get(this.randomDataUrl)
  }
}
