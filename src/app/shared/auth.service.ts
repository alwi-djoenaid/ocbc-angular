import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = 'https://fsd-h8-ocbc-my-movies.herokuapp.com';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: { name: string, email: string, _id: string} = {name: '', email: '', _id: ''};

  constructor(private http: HttpClient, private router: Router) { }

  // Sign up
  signUp(user: User): Observable<any>{
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError))
  }

  signIn(user: User){
    return this.http.post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/movies']);
        // this.getUserProfile(res._id).subscribe((res:any) => {
        //   this.currentUser = res;
        //   this.router.navigate([`/movies`]);
        // });
      });
  }

  // getUserProfile(id: any): Observable<any>{
  //   let api = 
  // }

  handleError(error: HttpErrorResponse){
    let msg = '';

    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    } else {
      msg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(msg);
  }

  get isLoggedIn(): boolean{
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  getToken(){
    return localStorage.getItem('access_token');
  }
}
