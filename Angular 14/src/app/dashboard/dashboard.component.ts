import { Component, OnInit } from '@angular/core';
import { Item } from '../app';
import { appService } from '../app.service';
import { AppComponent } from '../app.component';
import { BoldBI } from '@boldbi/boldbi-embedded-sdk';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'app-dashboard-listing',
    templateUrl: './dashboard.component.html',
    providers: [appService]
})

export class Dashboard implements OnInit {
    public dashboardsList!: Item[];
    result: any;
    dashboard: any;
    embedConfig: any;
    constructor(private _app: appService, private _appComponent: AppComponent, private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this._app.GetEmbedConfig(this._appComponent.apiHost + this._appComponent.getEmbedConfigUrl).subscribe(data => {
            this._appComponent.embedConfig = <any>data;
            // Transform camelCase keys to PascalCase
            const transformedEmbedConfigData = {
                DashboardId: this._appComponent.embedConfig.dashboardId,
                EmbedType: this._appComponent.embedConfig.embedType,
                Environment: this._appComponent.embedConfig.environment,
                ServerUrl: this._appComponent.embedConfig.serverUrl,
                SiteIdentifier: this._appComponent.embedConfig.siteIdentifier
            };
            this.dashboardService.setEmbedConfig(transformedEmbedConfigData);
            if (this.dashboardService.embedConfig.Environment == "enterprise" || this.dashboardService.embedConfig.Environment == "onpremise") {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl + "/" + this.dashboardService.embedConfig.SiteIdentifier;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api/" + this.dashboardService.embedConfig.SiteIdentifier;
            } else {
                this._appComponent.baseUrl = this.dashboardService.embedConfig.ServerUrl;
                this._appComponent.dashboardServerApiUrl = this.dashboardService.embedConfig.ServerUrl + "/api";
            }
        })
        this.renderDashboard();
    }

    getEmbedToken() {
        return fetch(this._appComponent.apiHost + this._appComponent.tokenGenerationUrl, { // Backend application URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        })
            .then(response => {
                if (!response.ok) throw new Error("Token fetch failed");
                return response.text();
            });
    }

    renderDashboard() {
        this.getEmbedToken()
            .then(accessToken => {
                const dashboard = BoldBI.create({
                    serverUrl: this._appComponent.baseUrl,
                    dashboardId: this.dashboardService.embedConfig.DashboardId,
                    embedContainerId: "dashboard",
                    embedToken: accessToken
                });

                dashboard.loadDashboard();
            })
            .catch(err => {
                console.error("Error rendering dashboard:", err);
            });
    };
}