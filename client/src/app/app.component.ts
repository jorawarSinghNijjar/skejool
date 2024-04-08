
import { Component, OnInit } from '@angular/core';

import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { AppService } from './services/app.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardViewComponent, RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  message = 'from client in dev mode with workflow';

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getIndex().subscribe({
      next: ({ message }) => this.message = message,
      error: err => console.error(`Error: ${err}`)
    })
  }
}
