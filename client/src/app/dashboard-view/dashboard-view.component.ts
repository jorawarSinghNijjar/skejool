import { Component } from '@angular/core';
import { CalendarComponent } from '../calendar/calendar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [CalendarComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.css'
})
export class DashboardViewComponent {

}
