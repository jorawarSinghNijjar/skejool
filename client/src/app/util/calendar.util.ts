import moment, { Moment } from "moment";

export const getWeekIndexFromMonth = (month: CalendarItem[][], date: Moment) => {
    let week;
    return month.findIndex(week => {
        console.log(week)
        return week.some((day) => {
            return moment(day.date).format('L') === moment(date).format('L');
        })

    })
}

// export const getCurrentDate


