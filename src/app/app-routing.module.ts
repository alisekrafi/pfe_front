import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEmployeComponent } from './admin/ajout-employe/ajout-employe.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetailsComponent } from './admin/details/details.component';
import { ListeCondidateComponent } from './admin/liste-condidate/liste-condidate.component';
import { ListeEmpComponent } from './admin/liste-emp/liste-emp.component';
import { CondidatComponent } from './condidat/condidat.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  
  { path:"home",component :HomeComponent},
  { path:"login",component :LoginComponent},
  { path:"navbar",component :NavbarComponent},
  { path:"dashboard_admin",component :DashboardAdminComponent},
  { path:"liste_emp",component :ListeEmpComponent},
  { path:"condidat",component :CondidatComponent},
  { path:"liste_condidat",component :ListeCondidateComponent},
  { path:"detail",component :DetailsComponent},
  { path:"ajout_emp",component :AjoutEmployeComponent},
  { path:"**",component :HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
