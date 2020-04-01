import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HeaderPageComponent } from "./header-page/header-page.component";
import { DummyPageComponent } from "./dummy-page/dummy-page.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { EmpListComponent } from "./emp-list/emp-list.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { AuthGuard } from "./auth.guard";
import { SampleComponent } from "./sample/sample.component";

const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'error', component:ErrorPageComponent},
    {path:'header', component:HeaderPageComponent},
    {path:'dummy', canActivate:[AuthGuard], component:DummyPageComponent, },
    {path:'pagination', component:PaginationComponent},
    {path:'emplist', canActivate:[AuthGuard], component:EmpListComponent},
    {path:'empdetails',canActivate:[AuthGuard], component:EmpDetailsComponent},
    {path:'sample', component:SampleComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }