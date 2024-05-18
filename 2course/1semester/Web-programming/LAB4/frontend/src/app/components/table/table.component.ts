import { Component } from '@angular/core';
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(public tableService: TableService) {
    this.tableService.refreshMarks()
  }
}
