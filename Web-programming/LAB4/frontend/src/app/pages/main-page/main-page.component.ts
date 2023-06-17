import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {TableService} from "../../services/table.service";
import {MarkService} from "../../services/mark.service";
import {GraphService} from "../../services/graph.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  constructor(
    private router: Router,
    private  authService: AuthService,
    private tableService: TableService,
    private graphService: GraphService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') === null){
      this.router.navigate(['/login'])
    }
    this.tableService.refreshMarks()
  }

  logout(){
    this.authService.logout()
    this.tableService.refreshMarks()
    this.graphService.rValue = NaN
  }

}
