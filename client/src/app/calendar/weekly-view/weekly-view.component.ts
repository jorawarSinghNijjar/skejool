import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { default as calendar } from 'calendar-js';

import { ScheduleService } from '../../services/schedule-service.service';
import { getWeekIndexFromMonth } from '../../util/calendar.util';
import moment from 'moment';
import { Weekly_Schedule } from '../../types/schedule';
import { CalendarType } from '../../types/calendar';

@Component({
  selector: 'app-weekly-view',
  standalone: true,
  imports: [NgFor, NgIf, TableModule, ButtonModule],
  templateUrl: './weekly-view.component.html',
  styleUrl: './weekly-view.component.css',
})
export class WeeklyViewComponent {
  displayWeek: Week_Type[] = [];
  displayMonth!: CalendarType;
  empSchedule!: Weekly_Schedule[];
  currentWeekIndex!: number;
  currentMonth!: number;
  currentYear!: number;
  displayMonthName!: string;
  lastWeekMonthName?: string | null | undefined;
  firstWeekMonthStartName?: string | null | undefined;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.displayCalendar();
  }

  displayCalendar() {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();

    this.displayMonth = calendar().detailed(
      this.currentYear,
      this.currentMonth
    );

    this.currentWeekIndex = getWeekIndexFromMonth(
      this.displayMonth.calendar,
      moment()
    );

    this.setDisplayWeek(this.displayMonth, this.currentWeekIndex);
    this.displayMonthName = moment(this.displayWeek[6].date).format('MMMM');
  }

  setDisplayWeek(month: CalendarType, weekIndexInMonth: number) {
    this.displayWeek = month.calendar[weekIndexInMonth].map((day) => {
      return {
        ...day,
        weekday: month.weekdaysAbbr[day.index.day],
        dayOfWeek: day.index.day,
      };
    });

    this.populateSchedule();
  }

  populateSchedule() {
    this.scheduleService
      .getAllEmployeesWeeklySchedule(this.displayWeek[0].date)
      .subscribe((res) => {
        console.log(res);
        this.empSchedule = res;
      });
  }

  nextWeek() {

    this.currentWeekIndex += 1;

    if (this.currentWeekIndex >= this.displayMonth.calendar.length) {
      let lastDateOfPreviousMonthArr =
        this.displayWeek[this.displayWeek.length - 1].date;
      this.currentMonth += 1;

      if (this.currentMonth >= 12) {
        this.currentYear += 1;
        this.currentMonth = 0;
      }

      this.displayMonth = calendar().detailed(
        this.currentYear,
        this.currentMonth
      );
      this.currentWeekIndex =
        getWeekIndexFromMonth(
          this.displayMonth.calendar,
          moment(lastDateOfPreviousMonthArr)
        ) + 1;
    }

    this.displayMonthName = moment(this.displayWeek[6].date).format('MMMM');
    this.setDisplayWeek(this.displayMonth, this.currentWeekIndex);

    if (moment(this.displayWeek[6].date).month() != this.currentMonth) {
      this.lastWeekMonthName = moment(this.displayWeek[0].date).format('MMMM');
      this.firstWeekMonthStartName = moment(this.displayWeek[6].date).format(
        'MMMM'
      );
    } else {
      this.lastWeekMonthName = null;
      this.firstWeekMonthStartName = null;
    }
  }

  previousWeek() {
    this.currentWeekIndex -= 1;

    if (this.currentWeekIndex < 0) {
      let lastDateOfPreviousMonthArr = this.displayWeek[0].date;
      this.currentMonth -= 1;

      if (this.currentMonth < 0) {
        this.currentYear -= 1;
        this.currentMonth = 11;
      }

      this.displayMonth = calendar().detailed(
        this.currentYear,
        this.currentMonth
      );
      this.currentWeekIndex =
        getWeekIndexFromMonth(
          this.displayMonth.calendar,
          moment(lastDateOfPreviousMonthArr)
        ) - 1;
    }

    this.displayMonthName = moment(this.displayWeek[0].date).format('MMMM');
    this.setDisplayWeek(this.displayMonth, this.currentWeekIndex);

    if (moment(this.displayWeek[0].date).month() != this.currentMonth) {
      this.lastWeekMonthName = moment(this.displayWeek[0].date).format('MMMM');
      this.firstWeekMonthStartName = moment(this.displayWeek[6].date).format(
        'MMMM'
      );
    } else {
      this.lastWeekMonthName = null;
      this.firstWeekMonthStartName = null;
    }
  }
}
