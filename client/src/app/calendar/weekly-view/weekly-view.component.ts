import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { default as calendar } from 'calendar-js';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { Store } from '@ngrx/store';
import moment from 'moment';
import { ScheduleService } from '../../services/schedule-service.service';
import { AppState } from '../../store/store';
import { CalendarType } from '../../types/calendar';
import { Weekly_Schedule } from '../../types/schedule';
import { getWeekIndexFromMonth } from '../../util/calendar.util';
import {
  loadNextMonth,
  loadNextWeek,
  loadPreviousMonth,
  loadPreviousWeek,
} from '../../store/actions';
import { Observable, Subscription } from 'rxjs';
import {
  selectCurrentMonth,
  selectCurrentMonthName,
  selectCurrentYear,
  selectFirstWeekMonthName,
  selectLastWeekMonthName,
  selectWeekCalendar,
} from '../../store/calendar-selectors';

@Component({
  selector: 'app-weekly-view',
  standalone: true,
  imports: [NgFor, NgIf, TableModule, ButtonModule, AsyncPipe],
  templateUrl: './weekly-view.component.html',
  styleUrl: './weekly-view.component.css',
})
export class WeeklyViewComponent {
  currentMonth$: Observable<number> = this.store.select(selectCurrentMonth);
  currentYear$: Observable<number> = this.store.select(selectCurrentYear);
  currentMonthName$: Observable<string> = this.store.select(
    selectCurrentMonthName
  );

  weekCalendar$: Observable<Weekly_Day[]> = this.store.select(selectWeekCalendar);
  empSchedule!: Weekly_Schedule[];

  lastWeekMonthName?: Observable<string | undefined> = this.store.select(
    selectLastWeekMonthName
  );
  firstWeekMonthName?: Observable<string | undefined> = this.store.select(
    selectFirstWeekMonthName
  );

  weekCalendarSubs!: Subscription;

  constructor(
    private scheduleService: ScheduleService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.displayCalendar();
  }

  displayCalendar() {
    this.weekCalendar$.subscribe((week) => {
      this.populateSchedule(week);
    });
  }

  populateSchedule(week: Weekly_Day[]) {
    this.scheduleService
      .getAllEmployeesWeeklySchedule(week[0].date)
      .subscribe((res) => {
        console.log(res);
        this.empSchedule = res;
      });
  }

  nextWeek() {
    this.store.dispatch(loadNextWeek());
  }

  previousWeek() {
    this.store.dispatch(loadPreviousWeek());
  }

  isCommonWeekForMonths(weekCalendar$: Observable<Weekly_Day[]>): boolean {
    let res = false;
    this.weekCalendarSubs = weekCalendar$.subscribe((week) => {
      moment(week[0].date).month() !== moment(week[6].date).month()
        ? (res = true)
        : (res = false);
    });
    return res;
  }

  ngOnDestroy(): void {
    this.weekCalendarSubs?.unsubscribe();
  }
}
