import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiUrl = "http://localhost:3000/students"
  constructor(private _http:HttpClient) { 

  }
  getStudets(){
    return this._http.get(this.apiUrl)
  }
}
