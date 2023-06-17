import {AfterViewInit, Component} from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {GraphService} from "../../services/graph.service";
import {MarkService} from "../../services/mark.service";
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  // @ts-ignore
  xLine: Element
  // @ts-ignore
  yLine: Element
  limit = {
    xMax: 3,
    xMin: -3,
    yMax: 3,
    yMin: -3,
    rMax: 3,
    rMin: 0.01
  }
  constructor(
    public tableService: TableService,
    private markService: MarkService,
    private graphService: GraphService,
    private errorService: ErrorService
  ) {
  }

  ngAfterViewInit(): void {
    this.yLine = document.querySelector("#y-line") as Element
    this.xLine = document.querySelector('#x-line') as Element
  }

  addMark(): void {
    if (isNaN(this.graphService.rValue) || this.graphService.rValue.toString() == '') {
      this.errorService.handle("You need to enter the R value")
    } else {
      const x = +(((parseFloat(this.xLine.getAttribute("x1") as string) - 150) / 100) * this.graphService.rValue).toFixed(1);
      const y = -(((parseFloat(this.yLine.getAttribute("y1") as string)- 150) / 100) * this.graphService.rValue).toFixed(1);
      const r = this.graphService.rValue;
      this.markService.addMark({
        xvalue: x as number,
        yvalue: y as number,
        rvalue: r as number
      }).subscribe(() => {
        this.tableService.refreshMarks()
      })
    }
  }

  refreshLines(e: MouseEvent) {
    const coord = e.offsetY - 40 * (e.offsetY / 340);
    this.yLine.setAttribute("stroke", "#ff0038");
    if (!isNaN(this.graphService.rValue) && !(this.graphService.rValue.toString() == '')) {
      const highLimit = this.limit.yMax * 100 / this.graphService.rValue;
      const lowLimit = -(this.limit.yMin * 100 / this.graphService.rValue);
      if (coord > 150) {
        this.yLine.setAttribute("y1", String(coord <= 150 + lowLimit ? coord : 150 + lowLimit));
        this.yLine.setAttribute("y2", String(coord <= 150 + lowLimit ? coord : 150 + lowLimit));
      } else {
        this.yLine.setAttribute("y1", String(coord >= 150 - highLimit ? coord : 150 - highLimit));
        this.yLine.setAttribute("y2", String(coord >= 150 - highLimit ? coord : 150 - highLimit));
      }
    } else {
      this.yLine.setAttribute("y1", String(coord));
      this.yLine.setAttribute("y2", String(coord));
    }

    const coordX = e.offsetX - 40 * (e.offsetX / 340);
    this.xLine.setAttribute("stroke", "#ff0038");
    if (this.graphService.rValue) {
      const highLimit = this.limit.xMax * 100 / this.graphService.rValue;
      const lowLimit = -(this.limit.xMin * 100 / this.graphService.rValue);
      if (coordX > 150) {
        this.xLine.setAttribute("x1", String(coordX <= 150 + highLimit ? coordX : 150 + highLimit));
        this.xLine.setAttribute("x2", String(coordX <= 150 + highLimit ? coordX : 150 + highLimit));
      } else {
        this.xLine.setAttribute("x1", String(coordX >= 150 - lowLimit ? coordX : 150 - lowLimit));
        this.xLine.setAttribute("x2", String(coordX >= 150 - lowLimit ? coordX : 150 - lowLimit));
      }
    } else {
      this.xLine.setAttribute("x1", String(coordX));
      this.xLine.setAttribute("x2", String(coordX));
    }
  }

  hideLines(){
    this.yLine.setAttribute("stroke", "transparent");
    this.xLine.setAttribute("stroke", "transparent");
  }
}
