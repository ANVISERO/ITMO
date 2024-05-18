import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { GraphComponent } from './components/graph/graph.component';
import { TableComponent } from './components/table/table.component';
import { InputMarkComponent } from './components/input-mark/input-mark.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { WarningComponent } from './components/warning/warning.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GraphComponent,
    TableComponent,
    InputMarkComponent,
    WarningComponent,
    AuthPageComponent,
    AuthComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
