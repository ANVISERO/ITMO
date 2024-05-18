import { Injectable } from '@angular/core';
import {IMark} from "../models/mark";
import {MarkService} from "./mark.service";
import {GraphService} from "./graph.service";
@Injectable({
  providedIn: 'root'
})
export class TableService {
  marks: IMark[] = [];
  marks1: IMark[] = [];

  constructor(private markService: MarkService, private graphService: GraphService) {
  }

  refreshMarks() {
    this.markService.getAllMarks()
      .subscribe(marks => {
        if (marks.length != 0) {
          marks.forEach(mark => {
            mark.time = (new Date(mark.time + 'Z')).toLocaleString('ru')
          })
          this.marks1 = marks.filter((mark) => mark.rvalue === this.graphService.rValue)
        }
        this.marks = marks
      })
  }

  refreshTable() {
    this.marks = []
    this.marks1 = []
  }

  clearTable() {
    this.markService.deleteAll()
      .subscribe(() => {
        this.refreshTable()
        this.refreshMarks()
      })
  }
}
