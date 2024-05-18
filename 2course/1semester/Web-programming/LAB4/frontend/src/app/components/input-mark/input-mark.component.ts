import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ErrorService} from "../../services/error.service";
import {MarkService} from "../../services/mark.service";
import {GraphService} from "../../services/graph.service";
import {TableService} from "../../services/table.service";

@Component({
  selector: 'app-input-mark',
  templateUrl: './input-mark.component.html',
  styleUrls: ['./input-mark.component.css']
})
export class InputMarkComponent {
  xMessage = 'Input X value [-3 ... 3]'
  yMessage = 'Input Y value [-3 ... 3]'
  rMessage = 'Input R value (0 ... 3]'

  form = new FormGroup({
    xValue: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.pattern(/^-?\d+[.]?\d*$/),
      Validators.min(-3),
      Validators.max(3)
    ]),
    yValue: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.pattern(/^-?\d+[.]?\d*$/),
      Validators.min(-3),
      Validators.max(3)
    ]),
    rValue: new FormControl<number | undefined>(undefined, [
      Validators.required,
      Validators.pattern(/^-?\d+[.]?\d*$/),
      Validators.min(0.001),
      Validators.max(3)
    ])
  })

  constructor(
    public errorService: ErrorService,
    private markService: MarkService,
    private graphService: GraphService,
    public tableService: TableService
  ) {
  }

  submit() {
    if (this.xValue.errors?.['required'] ||
        this.yValue.errors?.['required'] ||
        this.rValue.errors?.['required']) {
        this.errorService.handle("Input fields cannot be empty!")
    } else if (this.xValue.errors) {
        if (this.xValue.errors?.['pattern']) {
          this.xMessage = "Invalid X input"
          this.errorService.handle(this.xMessage)
        } else if (this.xValue.errors?.['max']) {
          this.xMessage = "X value must be less than 3"
          this.errorService.handle(this.xMessage)
        } else if (this.xValue.errors?.['min']) {
          this.xMessage = "The X value must be greater than -3"
          this.errorService.handle(this.xMessage)
        } else {
          this.xMessage = 'Input X value [-3 ... 3]'
          this.errorService.clear()
        }
    } else if (this.yValue.errors) {
        if (this.yValue.errors?.['pattern']) {
        this.yMessage = "Invalid Y input"
        this.errorService.handle(this.yMessage)
        } else if (this.yValue.errors?.['max']) {
          this.yMessage = "Y value must be less than 3"
          this.errorService.handle(this.yMessage)
        } else if (this.yValue.errors?.['min']) {
          this.yMessage = "The Y value must be greater than -3"
          this.errorService.handle(this.yMessage)
        } else {
          this.yMessage = 'Input Y value [-3 ... 3]'
          this.errorService.clear()
        }
    } else if (this.rValue.errors) {
        if (this.rValue.errors?.['pattern']) {
          this.rMessage = "Invalid R input"
          this.errorService.handle(this.rMessage)
        } else if (this.rValue.errors?.['max']) {
          this.rMessage = "R value must be less than 3"
          this.errorService.handle(this.rMessage)
        } else if (this.rValue.errors?.['min']) {
          this.rMessage = "The R value must be greater than 0"
          this.errorService.handle(this.rMessage)
        } else {
          this.rMessage = 'Input R value (0 ... 3]'
          this.errorService.clear()
        }
    } else {
      this.markService.addMark({
          xvalue: this.xValue.value as number,
          yvalue: this.yValue.value as number,
          rvalue: this.rValue.value as number
        })
        .subscribe(() => {
          this.tableService.refreshMarks()
        })
    }
  }

  validateX(e: Event) {
    if (this.xValue.errors?.['pattern']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.xMessage = "Invalid X input"
      this.errorService.handle(this.xMessage)
    } else if (this.xValue.errors?.['max']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.xMessage = "X value must be less than 3"
      this.errorService.handle(this.xMessage)
    } else if (this.xValue.errors?.['min']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.xMessage = "The X value must be greater than -3"
      this.errorService.handle(this.xMessage)
    } else {
      // @ts-ignore
      e.target.classList.remove('is-invalid')
      this.xMessage = 'Input X value [-3 ... 3]'
      this.errorService.clear()
    }
  }

  validateY(e: Event) {
    if (this.yValue.errors?.['pattern']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.yMessage = "Invalid Y input"
      this.errorService.handle(this.yMessage)
    } else if (this.yValue.errors?.['max']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.yMessage = "Y value must be less than 3"
      this.errorService.handle(this.yMessage)
    } else if (this.yValue.errors?.['min']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.yMessage = "The Y value must be greater than -3"
      this.errorService.handle(this.yMessage)
    } else {
      // @ts-ignore
      e.target.classList.remove('is-invalid')
      this.yMessage = 'Input Y value [-3 ... 3]'
      this.errorService.clear()
    }
  }

  validateR(e: Event) {
    if (this.rValue.errors?.['pattern']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.rMessage = "Invalid R input"
      this.errorService.handle(this.rMessage)
    } else if (this.rValue.errors?.['max']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.rMessage = "R value must be less than 3"
      this.errorService.handle(this.rMessage)
    } else if (this.rValue.errors?.['min']) {
      // @ts-ignore
      e.target.classList.add('is-invalid')
      this.rMessage = "The R value must be greater than 0"
      this.errorService.handle(this.rMessage)
    } else {
      // @ts-ignore
      e.target.classList.remove('is-invalid')
      this.rMessage = 'Input R value (0 ... 3]'
      this.graphService.changeRText(this.rValue.value as number)
      this.tableService.refreshMarks()
      this.errorService.clear()
    }
  }

  get xValue() {
    return this.form.controls.xValue
  }

  get yValue() {
    return this.form.controls.yValue
  }

  get rValue() {
    return this.form.controls.rValue
  }
}
