import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CondidatComponent } from './condidat/condidat.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ListeEmpComponent } from './admin/liste-emp/liste-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DetailsComponent } from './admin/details/details.component';
import { ListeCondidateComponent } from './admin/liste-condidate/liste-condidate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutEmployeComponent } from './admin/ajout-employe/ajout-employe.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CondidatComponent,
    LoginComponent,
    DashboardAdminComponent,
    ListeEmpComponent,
    SidebarComponent,
    DetailsComponent,
    ListeCondidateComponent,
    AjoutEmployeComponent
   
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
