import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    getIndex(): Observable<{ message: string }> {
        console.log("Getting index")
        return this.http.get<{ message: string }>(environment.apiUrl + '/');
    }
}