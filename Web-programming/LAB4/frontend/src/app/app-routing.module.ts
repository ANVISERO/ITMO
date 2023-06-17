import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {AuthPageComponent} from "./pages/auth-page/auth-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const routes: Routes = [
  {path: 'auth', component: AuthPageComponent},
  {path: 'main', component: MainPageComponent},
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
