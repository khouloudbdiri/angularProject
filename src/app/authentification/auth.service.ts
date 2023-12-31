import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseurl="http://localhost:3001/api/user"
  constructor(private http: HttpClient, public router: Router) { }

  // Sign-up
  signUp(user: User): Observable<any> {
    
    return this.http.post(this.baseurl , user);
  }
  // Sign-in
  signIn(user: any) {
    return this.http
      .post<any>(this.baseurl + "/login/" , user)
      .subscribe({
          next: (res:any) => {
            localStorage.setItem('access_token', res.token);
            
          },
          error: (e:any) => {
            console.log(e);
            alert("Error !")
          },
          complete: () => {
            this.router.navigate(['products']);
           }
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  getisLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

}
