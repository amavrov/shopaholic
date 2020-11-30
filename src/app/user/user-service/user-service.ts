import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
//import { IUser } from '../shared/interfaces';
//import { catchError, tap } from 'rxjs/operators';

//const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  //currentUser: IUser | null;

  constructor(private http: HttpClient) { }

  getCurrentUserProfile(): Observable<any> { 
    return null;
  }

  login(data: any): Observable<any> {
    // return this.http.post(`${apiUrl}/users/login`, data, { withCredentials: true }).pipe(
    //   tap((user: IUser) => this.currentUser = user)
    return null;
  }

  register(data: any): Observable<any> {
    return null;
  }

  logout(): Observable<any> {
    return null;
  }

  updateProfile(data: any): Observable<any> {
    return null;
  }
}
