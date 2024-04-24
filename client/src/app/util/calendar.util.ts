import moment, { Moment } from "moment";

export const getWeekIndexFromMonth = (month: CalendarItem[][], date: Moment) => {
    return month.findIndex(week => {
        return week.some((day) => {
            return moment(day.date).format('L') === moment(date).format('L');
        })
    })
}

export const generate24HourArray = () => {
    const hoursArray = [];
    for (let i = 0; i < 24; i++) {
      const hour = moment({ hour: i }).format('h A');
      hoursArray.push(hour);
    }
    return hoursArray;
}



