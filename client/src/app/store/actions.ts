import { createAction, props } from '@ngrx/store';
import {
  LOAD_MONTH_CALENDAR,
  LOAD_NEXT_MONTH,
  LOAD_NEXT_WEEK,
  LOAD_PREV_MONTH,
  LOAD_PREV_WEEK,
} from './constants';

export const loadMonthCalendar = createAction(LOAD_MONTH_CALENDAR);
export const loadNextMonth = createAction(LOAD_NEXT_MONTH);
export const loadPreviousMonth = createAction(LOAD_PREV_MONTH);

export const loadNextWeek = createAction(LOAD_NEXT_WEEK);
export const loadPreviousWeek = createAction(LOAD_PREV_WEEK);
