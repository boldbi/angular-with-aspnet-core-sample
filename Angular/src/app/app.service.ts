import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class appService {

    constructor(private http: HttpClient) {
    }

    public GetEmbedConfig(getDashboardsUrl: string) {
        return this.http.get(getDashboardsUrl, {
        }).pipe(res => {
            return <any>res;
        });
    }
}