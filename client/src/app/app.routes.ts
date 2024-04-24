import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardViewComponent,
    children: [
        {
            path: 'calendar',
            component: CalendarComponent
        }
    ]
},
{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutes {}




