import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ErrorService} from "../../services/error.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  login = true
  compare = false

  constructor(
    private authService: AuthService,
    public errorService: ErrorService,
    private router: Router
  ) {
  }

  formLogin = new FormGroup({
    login: new FormControl<string>('', Validators.required),
    password: new FormControl<string>('', Validators.required)
  })

  formRegister = new FormGroup({
    username: new FormControl<string>('', Validators.required),
    password1: new FormControl<string>('', Validators.required),
    password2: new FormControl<string>('', Validators.required)
  })

  signIn() {
    if (this.formLogin.controls.login.errors || this.formLogin.controls.password.errors) {
      this.errorService.handle('Fields are empty!')
    } else {
      this.authService.signIn({
        login: this.formLogin.controls.login.value as string,
        password: this.formLogin.controls.password.value as string
      }).subscribe(() => {
        if (this.authService.authenticated) {
          this.router.navigate(['/main'])
        }
      })
    }
  }

  signUp() {
    if (this.formRegister.controls.username.errors ||
      this.formRegister.controls.password1.errors ||
      this.formRegister.controls.password2.errors) {
      this.errorService.handle('Fields are empty!')
    } else if (!this.compare) {
      this.errorService.handle("Passwords don't match")
    } else {
      this.authService.signUp({
        login: this.formRegister.controls.username.value as string,
        password: this.formRegister.controls.password1.value as string
      }).subscribe(() => {
        if (this.authService.authenticated) {
          this.router.navigate(['/main'])
        }
      })
    }
  }

  comparePasswords() {
    this.compare = this.formRegister.controls.password1.value === this.formRegister.controls.password2.value;
  }

  switchForm() {
    this.login = !this.login
  }
}
