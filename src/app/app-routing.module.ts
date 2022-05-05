import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEmployeComponent } from './admin/ajout-employe/ajout-employe.component';
import { AnnonceComponent } from './admin/annonce/annonce.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetailsComponent } from './admin/details/details.component';
import { ListeCondidateComponent } from './admin/liste-condidate/liste-condidate.component';
import { ListeCongeComponent } from './admin/liste-conge/liste-conge.component';
import { ListeEmpComponent } from './admin/liste-emp/liste-emp.component';
import { MeetingComponent } from './admin/meeting/meeting.component';
import { ReponseCongeComponent } from './admin/reponse-conge/reponse-conge.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { UpdateInfoComponent } from './admin/update-info/update-info.component';
import { UpdatePwdComponent } from './admin/update-pwd/update-pwd.component';
import { CondidatComponent } from './condidat/condidat.component';
import { AnnonceEmpComponent } from './employe/annonce-emp/annonce-emp.component';
import { DashboardEmpComponent } from './employe/dashboard-emp/dashboard-emp.component';
import { DemandeCongeComponent } from './employe/demande-conge/demande-conge.component';
import { MeetingEmpComponent } from './employe/meeting-emp/meeting-emp.component';
import { SidebarEmpComponent } from './employe/sidebar-emp/sidebar-emp.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [

  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "sidebar_emp", component: SidebarEmpComponent },
  { path: "sidebar", component: SidebarComponent },
  { path: "condidat", component: CondidatComponent },
  { path: "reset-password/:token", component:ResetPasswordComponent }  ,  
  { path: "forget", component: ForgetPasswordComponent },
  {path: "dashboard_emp", component: DashboardEmpComponent},
  



  {
    path: "dashboard_admin", component: DashboardAdminComponent,
    children: [
      { path: "liste_emp", component: ListeEmpComponent },
      { path: "reponse/:id", component: ReponseCongeComponent  },
      { path: "liste_condidat", component: ListeCondidateComponent },
      { path: "detail", component: DetailsComponent },
      { path: "ajout_emp", component: AjoutEmployeComponent },
      { path: "liste_conge", component: ListeCongeComponent },
      { path: "meeting", component: MeetingComponent },
      { path: "annonce", component: AnnonceComponent },
      { path: "info", component: UpdateInfoComponent },
      { path: "pwd", component: UpdatePwdComponent },

    ]
  },


  



  {
    path: "dashboard_emp", component: DashboardEmpComponent,
    children: [
      
      { path: "annonce_emp", component: AnnonceEmpComponent },
      { path: "conge_emp", component: DemandeCongeComponent },
      { path: "meeting_emp", component: MeetingEmpComponent },

    ]
  },

  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
