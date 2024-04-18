import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import moment, { Moment } from 'moment';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { generate24HourArray } from '../../util/calendar.util';
import { ScheduleService } from '../../services/schedule-service.service';
import { Daily_Schedule } from '../../types/schedule';

@Component({
  selector: 'app-daily-view',
  standalone: true,
  imports: [TableModule, NgFor, NgIf, ButtonModule],
  templateUrl: './daily-view.component.html',
  styleUrl: './daily-view.component.css',
})
export class DailyViewComponent implements OnInit {
  displayHours!: string[];
  displayDate!: Moment;
  empSchedule!: Daily_Schedule[];

  ngOnInit(): void {
    this.displayHours = generate24HourArray();
    const today = new Date();
    this.displayDate = moment(today);

    this.populateSchedule();
  }

  constructor(private scheduleService: ScheduleService) {}

  populateSchedule() {
    this.scheduleService
      .getDailyScheduleOfAllEmployees(new Date())
      .subscribe((res) => (this.empSchedule = res));
  }
}
