import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { AppRoutingModule } from './app.routing.module';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { PaginationComponent } from './pagination/pagination.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { SampleComponent } from './sample/sample.component';
import { LanguagePipe } from './language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ErrorPageComponent,
    HeaderPageComponent,
    DummyPageComponent,
    PaginationComponent,
    EmpListComponent,
    EmpDetailsComponent,
    SampleComponent,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
