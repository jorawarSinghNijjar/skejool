import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';

export const routes: Routes = [
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
