import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _http: HttpClient) {}
    apiUrl = 'http://localhost:3000/users/';

   addUserToServer(user: any) {
    return this._http.post(this.apiUrl,user)

    // const details:any = await this.postUser(user);

    // console.log(details);
    // return this._http.get(apiUrl+details['id']);
  }
  // postUser(user: any) {
  //   const apiUrl = 'http://localhost:3000/users';
  //   return new Promise((resolve, reject) => {
  //     this._http.post(apiUrl, user).subscribe((res) => {
  //       resolve(res);
  //     });
  //   });
  // }


  getUsers(){
    return this._http.get(this.apiUrl)
  }

  deleteUserInServer(user:any){
    return this._http.delete(this.apiUrl+user.id)
  }

  updateUserInServer(user:any){
    return this._http.put(this.apiUrl+user.id,user)
  }
}
