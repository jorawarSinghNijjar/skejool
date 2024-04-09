// interface Shift {
//     shiftId: number;
//     shiftWeekStartDate: Date;
//     startDay: number;
//     endDay: number;
//     startTime: string;
//     endTime: string;
//     recurring: boolean;
//     reccurrenceStartDate: Date;
//     reccurrenceEndDate: Date;
// }


interface Weekly_Shift {
    notAssigned: boolean;
    startTime: string;
    endTime: string;
    position: string;
}

export interface Monthly_Day_Shift {
    startTime: string;
    endTime: string;
    position: string;
    employeeName: string;
}