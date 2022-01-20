
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host='http://localhost:8000/api/'


  constructor(private http:HttpClient) {}

    login(user: String,pass: String){
      console.log(user)
      console.log(pass)
      
      let authData= {
        name:user,
        password:pass
      }
      let data = JSON.stringify(authData);

      let headerObj = new HttpHeaders({
        'Content-Type':'application/json'
      });

      let header = {
        headers : headerObj
      }

      let endpoint = 'login';
      let url = this.host + endpoint

      return this.http.post<any>(url,data,header)
    }
   
}
