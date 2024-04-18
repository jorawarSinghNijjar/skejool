import { createReducer, on } from '@ngrx/store';
import { default as calendar } from 'calendar-js';
import {
  loadMonthCalendar,
  loadNextMonth,
  loadNextWeek,
  loadPreviousMonth,
  loadPreviousWeek,
} from './actions';
import { Calendar_State } from './store-types';
import { CalendarType } from '../types/calendar';
import { getWeekIndexFromMonth } from '../util/calendar.util';
import moment from 'moment';

// helper functions
export const getMonthCalendar = (year: number, month: number) =>
  calendar().detailed(year, month);

export const nextMonthState = (state: Calendar_State) => {
  let { currentYear, currentMonth } = state;

  currentMonth += 1;
  if (currentMonth >= 12) {
    currentYear += 1;
    currentMonth = 0;
  }

  return {
    ...state,
    monthCalendar: getMonthCalendar(currentYear, currentMonth),
    currentMonth,
    currentYear,
  };
};

export const previousMonthState = (state: Calendar_State) => {
  let { currentYear, currentMonth } = state;

  currentMonth -= 1;
  if (currentMonth < 0) {
    currentYear -= 1;
    currentMonth = 11;
  }

  return {
    ...state,
    monthCalendar: getMonthCalendar(currentYear, currentMonth),
    currentMonth,
    currentYear,
  };
};

export const getMonthName = (date: Date):string => {
   return moment(date).format('MMMM');
}

export const isCommonWeekForMonths = (week: CalendarItem[]):boolean => {
    return moment(week[0].date).month() !== moment(week[6].date).month() ? true : false;
}

export const getWeekCalendar = (
  month: CalendarType,
  weekIndexInMonth: number
) => {
    let week = month.calendar[weekIndexInMonth];
  return month.calendar[weekIndexInMonth].map((day) => {
    return {
      ...day,
      weekday: month.weekdaysAbbr[day.index.day],
      dayOfWeek: day.index.day,
      monthName: getMonthName(day.date),
      isCommonWeekForMonths: isCommonWeekForMonths(week)
    };
  });
};

export const nextWeekState = (state: Calendar_State) => {
  let { currentWeekIndex, monthCalendar, weekCalendar } = state;

  currentWeekIndex += 1;

  let updatedCalendarState = state;
  if (currentWeekIndex >= monthCalendar.calendar.length) {
    let lastDateOfPreviousMonthArr = weekCalendar[weekCalendar.length - 1].date;

    updatedCalendarState = nextMonthState(state);
    currentWeekIndex = getWeekIndexFromMonth(
      updatedCalendarState.monthCalendar.calendar,
      moment(lastDateOfPreviousMonthArr)
    );
  }

  let updatedWeekCalendar = getWeekCalendar(
    updatedCalendarState.monthCalendar,
    currentWeekIndex
  );
  return {
    ...updatedCalendarState,
    currentWeekIndex,
    weekCalendar: updatedWeekCalendar,
  };
};

export const previousWeekState = (state: Calendar_State) => {
    let { currentWeekIndex, monthCalendar, weekCalendar } = state;

    currentWeekIndex -= 1;
  
    let updatedCalendarState = state;
    if (currentWeekIndex < 0) {
      let lastDateOfPreviousMonthArr = weekCalendar[0].date;
  
      updatedCalendarState = previousMonthState(state);
      currentWeekIndex = getWeekIndexFromMonth(
        updatedCalendarState.monthCalendar.calendar,
        moment(lastDateOfPreviousMonthArr)
      ) - 1;
    }
  
    let updatedWeekCalendar = getWeekCalendar(
      updatedCalendarState.monthCalendar,
      currentWeekIndex
    );
    return {
      ...updatedCalendarState,
      currentWeekIndex,
      weekCalendar: updatedWeekCalendar,
    };
};

// Initial State Setup

const today = new Date();
const monthCalendar = getMonthCalendar(today.getFullYear(), today.getMonth());
const currentWeekIndex = getWeekIndexFromMonth(
  monthCalendar.calendar,
  moment(today)
);

export const initialState: Calendar_State = {
  monthCalendar: monthCalendar,
  currentMonth: today.getMonth(),
  currentYear: today.getFullYear(),
  weekCalendar: getWeekCalendar(monthCalendar, currentWeekIndex),
  currentWeekIndex: currentWeekIndex,
};

// Reducers

export const monthCalendarReducer = createReducer(
  initialState,
  on(loadMonthCalendar, (state) => state),
  on(loadNextMonth, (state) => nextMonthState(state)),
  on(loadPreviousMonth, (state) => previousMonthState(state)),
  on(loadNextWeek, (state) => nextWeekState(state)),
  on(loadPreviousWeek, (state) => previousWeekState(state))
);
