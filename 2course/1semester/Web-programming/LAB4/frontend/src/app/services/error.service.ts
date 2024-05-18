import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  // stream
  error$ = new Subject<string>() // динамически отслеживаем изменение данных ошибки
  handle(message: string) {
    this.error$.next(message) // уведомляем всех подписчиков, что произошла ошибка
  }

  clear() {
    this.error$.next('') // очищаем ошибку
  }
}
