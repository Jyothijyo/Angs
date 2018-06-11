import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path     : 'login',
    component: LoginComponent
  },
  {
    path     : 'register',
    component: RegisterComponent
  },
  {
    path     : 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
