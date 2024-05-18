import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  // @ts-ignore
  rValue: number

  constructor() { }

  changeRText(rValue:number) {
    this.rValue = parseFloat(rValue.toString())
    const rLablesWhole = document.querySelectorAll(".graph-label.r-whole-pos");
    const rLablesHalf = document.querySelectorAll(".graph-label.r-half-pos");
    const rLablesNegWhole = document.querySelectorAll(".graph-label.r-whole-neg");
    const rLablesNegHalf = document.querySelectorAll(".graph-label.r-half-neg");
    rLablesWhole.forEach(
      (el) => (el.textContent = this.rValue ? this.rValue.toString() : "R")
    );
    rLablesHalf.forEach(
      (el) => (el.textContent = this.rValue / 2 ? (this.rValue / 2).toString() : "R/2")
    );
    rLablesNegWhole.forEach(
      (el) => (el.textContent = -this.rValue ? (-this.rValue).toString() : "-R")
    );
    rLablesNegHalf.forEach(
      (el) => (el.textContent = -(this.rValue / 2) ? (-(this.rValue / 2)).toString() : "-R/2")
    );
  }
}
