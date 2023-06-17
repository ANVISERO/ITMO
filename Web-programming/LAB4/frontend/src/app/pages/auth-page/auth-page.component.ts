import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit{
  constructor(private router: Router, private tableService: TableService) {
  }
  ngOnInit(): void {
    if (localStorage.getItem('token')){
      this.router.navigateByUrl('/main')
      this.tableService.refreshMarks()
    }
  }
}
