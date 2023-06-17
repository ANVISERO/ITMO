import {Component, OnInit} from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit{
  constructor(public errorService: ErrorService) {
  }
  error = false
  message: string = ''

  ngOnInit(): void {
    this.errorService.error$.subscribe(error => {
      if (error === '') {
        this.error = false
      } else {
        this.message = error
        this.error = true
      }
    })
  }

  closeAlert() {
    this.error = false
  }
}
