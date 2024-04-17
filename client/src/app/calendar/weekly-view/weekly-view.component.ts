import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { default as calendar } from 'calendar-js';


import { ScheduleService } from '../../services/schedule-service.service';
import { getWeekIndexFromMonth } from '../../util/calendar.util';
import moment from 'moment';
import { Weekly_Schedule } from '../../types/schedule';


@Component({
  selector: 'app-weekly-view',
  standalone: true,
  imports: [NgFor, NgIf, TableModule, ButtonModule],
  templateUrl: './weekly-view.component.html',
  styleUrl: './weekly-view.component.css'
})
export class WeeklyViewComponent {
  displayWeek: WeekType[] = [];
  displayMonth: string = '';
  empSchedule!: Weekly_Schedule[];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.displayCalendar();
  }

  displayCalendar() {
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    // console.log(calendar().of(currentYear, currentMonth));

    var month = calendar().detailed(currentYear, currentMonth);

    // console.log(month.calendar);
    // console.log(month);

    let currentWeekIndex = getWeekIndexFromMonth(month.calendar, moment());
    this.displayMonth = month.month;
    this.displayWeek = month.calendar[currentWeekIndex].map(
      ({ date, day, index }) => {
        return {
          date,
          day,
          weekday: month.weekdaysAbbr[index.day],
          dayOfWeek: index.day,
        };
      }
    );

    this.populateSchedule();
  }

  populateSchedule() {
    this.scheduleService.getAllEmployeesWeeklySchedule(this.displayWeek[0].date).subscribe(res => {
      console.log(res)
      this.empSchedule = res;
    });
  }
}
