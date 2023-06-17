import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {IMark} from "../models/mark";
import {catchError, Observable, throwError} from "rxjs";
import {TableService} from "./table.service";

@Injectable({
  providedIn: 'root'
})
export class MarkService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  addMark(mark: IMark): Observable<IMark> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.token
    })
    return this.http.post<IMark>('http://localhost:8080/demo-1.0-SNAPSHOT/api/mark', mark, {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  getAllMarks(): Observable<IMark[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.token
    })
    return this.http.get<IMark[]>('http://localhost:8080/demo-1.0-SNAPSHOT/api/mark', {headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  deleteAll(): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.authService.token
    })
    return this.http.delete<string>('http://localhost:8080/demo-1.0-SNAPSHOT/api/mark',{headers: headers})
      .pipe(
        catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['/auth'])
      localStorage.removeItem('token')
    }
    return throwError(() => error.message)
  }
}
