import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, Pipe, SimpleChanges } from '@angular/core';
import { default as calendar } from 'calendar-js';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ScheduleService } from '../../services/schedule-service.service';
import { Monthly_Day, Monthly_Schedule } from '../../types/schedule';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';
import { CalendarType } from '../../types/calendar';
import { Observable } from 'rxjs';
import { Calendar_State } from '../../store/store-types';
import { selectCurrentMonth, selectCurrentMonthName, selectCurrentYear, selectMonthCalendarDetails } from '../../store/calendar-selectors';
import { loadNextMonth, loadPreviousMonth } from '../../store/actions';

@Component({
  selector: 'app-monthly-view',
  standalone: true,
  imports: [TableModule, ButtonModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './monthly-view.component.html',
  styleUrl: './monthly-view.component.css',
})
export class MonthlyViewComponent implements OnInit {
  currentMonth$: Observable<number> = this.store.select(selectCurrentMonth);
  currentYear$: Observable<number> = this.store.select(selectCurrentYear);
  currentMonthName$: Observable<string> = this.store.select(selectCurrentMonthName);

  monthCalendar$: Observable<CalendarType> = this.store.select(selectMonthCalendarDetails);
 
  monthlySchedule!: Monthly_Day[][];

  ngOnInit(): void {
    this.displayCalendar();
  }

  constructor(private scheduleService: ScheduleService, private store: Store<AppState>) {
    
  }

  displayCalendar() {
    this.monthCalendar$.subscribe(calendar => {
      console.log(calendar)
      this.populateSchedule(calendar);
    })
    
  }

  populateSchedule(month: Monthly_Schedule) {
    this.scheduleService.getMonthlySchedule(month).subscribe((schedule) => {
      console.log(schedule);
      this.monthlySchedule = schedule;
    });
  }


  nextMonth(){
    this.store.dispatch(loadNextMonth());
  }

  prevMonth(){
    this.store.dispatch(loadPreviousMonth());
  }


}
