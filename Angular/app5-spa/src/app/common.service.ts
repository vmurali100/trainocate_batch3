import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl="http://filltext.com/?rows=5&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
  constructor(private _http:HttpClient) { }

  getUsers(){
    return this._http.get(this.apiUrl)
  }
}
