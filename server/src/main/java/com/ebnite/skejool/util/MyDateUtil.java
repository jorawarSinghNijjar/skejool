package com.ebnite.skejool.util;

import java.time.DayOfWeek;
import java.time.LocalDate;

public class MyDateUtil {

    public static LocalDate getWeekStartDate(LocalDate currentDate){
        while(currentDate.getDayOfWeek()!= DayOfWeek.SUNDAY){
            currentDate = currentDate.minusDays(1);
        }
        return currentDate;
    }
}
