import { Component, OnInit } from '@angular/core';
import { Item } from '../app';
import { appService } from '../app.service';
import { AppComponent } from '../app.component';
import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
// declare var BoldBI: any;
@Component({
    selector: 'app-dashboard-listing',
    templateUrl: './dashboard-listing.component.html',
    styleUrls: ['./dashboard-listing.component.css'],
    providers: [appService]
})

export class DashboardListing implements OnInit {

    public dashboardsList!: Item[];
    result: any;
    dashboard: any;
    constructor(private _app: appService, private _appComponent: AppComponent) {
    }

    ngOnInit() {
        if (this._appComponent.environment == "enterprise" ||this._appComponent.environment == "onpremise") {
            this._appComponent.baseUrl = this._appComponent.rootUrl + "/" + this._appComponent.siteIdentifier;
            this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api/" + this._appComponent.siteIdentifier;
        }
        else {
            this._appComponent.baseUrl = this._appComponent.rootUrl;
            this._appComponent.dashboardServerApiUrl = this._appComponent.rootUrl + "/api";

        }
        // this._app.Gettoken(this._appComponent.dashboardServerApiUrl,this._appComponent.userId,this._appComponent.userPassword).subscribe(data => {
        //     this.result = data;
        //     this._appComponent.token = JSON.parse(this.result.Token).access_token;
        //     this._app.GetDashboards(this._appComponent.getDashboardsUrl).subscribe(data => {
        //         this._appComponent.dashboards = <any>data;
        //         this.dashboardsList = this._appComponent.dashboards;
        //     });
        // });
        this._app.GetDashboards(this._appComponent.apiHost + this._appComponent.getDashboardsUrl).subscribe(data => {
            this._appComponent.dashboards = <any>data;
            this.dashboardsList = this._appComponent.dashboards;
            this.renderDashboard(this.dashboardsList[0]);
        });
    }

    renderDashboard(dashboard: Item) {
        this.dashboard= BoldBI.create({
            serverUrl: this._appComponent.baseUrl,
            dashboardId: dashboard.Id,
            embedContainerId: "dashboard",
            embedType: BoldBI.EmbedType.Component,
            environment: ((this._appComponent.environment=="enterprise") || (this._appComponent.environment == "onpremise"))? BoldBI.Environment.Enterprise:BoldBI.Environment.Cloud,
            width:"100%",
            height:"100%",
            expirationTime:100000,
            authorizationServer: {
                url:this._appComponent.apiHost + this._appComponent.authorizationUrl
            }
        });

        console.log(this.dashboard);
        this.dashboard.loadDashboard();        
    } 
}
