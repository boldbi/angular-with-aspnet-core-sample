import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { HashLocationStrategy } from '@angular/common';

@Injectable()

export class appService {

    private authUrl!: string;
    private getDashboardsUrl!: string;
    private header!: HttpHeaders;

    constructor(private http: HttpClient) {
    }

    public GetEmbedConfig(getDashboardsUrl: string) {
        return this.http.get(getDashboardsUrl, {
        }).pipe(res => {
            return <any>res;
        });
    }
}