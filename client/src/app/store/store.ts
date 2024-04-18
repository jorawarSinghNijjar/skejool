import { Action, ActionReducer } from "@ngrx/store";
import { monthCalendarReducer } from "./reducers";
import { Calendar_State } from "./store-types";

export interface AppState {
    calendar: Calendar_State;
}

export interface AppStore {
    calendar: ActionReducer<(Calendar_State), Action>;
}

export const appStore: AppStore = {
    calendar: monthCalendarReducer
}


