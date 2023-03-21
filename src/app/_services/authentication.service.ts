import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from "../environments/environment"


@Injectable({
    providedIn: 'root'
})

export class authService {

    constructor(private http: HttpClient) {
    }

    public withClient(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/events?client_id=${environment.client_ID}`);
    }

    public withClientId(id:any): Observable<any> {
        return this.http.get(`${environment.apiUrl}/events/${id}?client_id=${environment.client_ID}`);
    }

    public withClientSecret(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/events?client_id=${environment.client_ID}&client_secret=${environment.client_secret}`);
    }

}