import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ViewBoxComponent } from './view-box/view-box.component';
import { WeeklyViewComponent } from './weekly-view/weekly-view.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NgFor, NgIf, TableModule, ButtonModule, ViewBoxComponent ,WeeklyViewComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
