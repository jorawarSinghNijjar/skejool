import { AppState } from "./store";

export const selectCurrentMonth = (state: AppState) => state.calendar.currentMonth;
export const selectCurrentYear = (state: AppState) => state.calendar.currentYear;
export const selectCurrentMonthName = (state: AppState) => state.calendar.monthCalendar.month;
export const selectMonthCalendarDetails = (state: AppState) => state.calendar.monthCalendar;

export const selectWeekCalendar = (state: AppState) => state.calendar.weekCalendar;
export const selectLastWeekMonthName = (state: AppState) => state.calendar.weekCalendar[0].monthName;
export const selectFirstWeekMonthName = (state: AppState) => state.calendar.weekCalendar[6].monthName;