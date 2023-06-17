import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {IUser} from "../models/user";
import {catchError, Observable, tap, throwError} from "rxjs";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string | null = ''
  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.token = localStorage.getItem('token')
  }

  authenticated: boolean = false

  signIn(user: IUser): Observable<string> {
    return this.http.post<string>('http://localhost:8080/demo-1.0-SNAPSHOT/api/login/signin', {
      login: user.login,
      password: user.password
    })
      .pipe(
        tap(response => {
          // @ts-ignore
          localStorage.setItem('token', response['accessToken'])
          // @ts-ignore
          this.token = response['accessToken']
          this.authenticated = true
        }),
        catchError(this.errorHandler.bind(this))
      )
  }

  signUp(user: IUser): Observable<string> {
    return this.http.post<string>('http://localhost:8080/demo-1.0-SNAPSHOT/api/login/register', {
      login: user.login,
      password: user.password
    })
      .pipe(
        tap(response => {
          // @ts-ignore
          localStorage.setItem('token', response['accessToken'])
          // @ts-ignore
          this.token = response['accessToken']
          this.authenticated = true
        }),
        catchError(this.errorHandler.bind(this))
      )
  }

  logout(){
    localStorage.removeItem('token')
    this.token = ''
  }

  private errorHandler(error: HttpErrorResponse) {
    this.authenticated = false
    if (error.url === 'http://localhost:8080/demo-1.0-SNAPSHOT/api/login/signin') {
      if (error.status === 401) {
        this.errorService.handle('Incorrect password!')
      } else if (error.status === 400) {
        this.errorService.handle('Incorrect username!')
      } else {
        this.errorService.handle('Server error!!!')
      }
    } else if (error.url === 'http://localhost:8080/demo-1.0-SNAPSHOT/api/login/register') {
      if (error.status === 400) {
        this.errorService.handle('User already exists!')
      } else {
        this.errorService.handle('Server error!!!')
      }
    }
    return throwError(() => error.message)
  }
}
