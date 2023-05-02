import { Component } from '@angular/core';
import { appService } from './app.service';
import { DashboardService } from './dashboard.service';

var embedConfig;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// var embedConfig;
  export class AppComponent {

    //ASP.NET Core application would be run on http://localhost:61377/, which needs to be set as `apiHost`
    public apiHost="http://localhost:61377/";
  
    //Your Bold BI application environment. (If Cloud, you should use `cloud`, if Enterprise, you should use `enterprise`)
    public environment = "enterprise";
  
    //Dashboard Server BI URL (ex: http://localhost:5000/bi, http://demo.boldbi.com/bi)
    public rootUrl = "http://localhost:53150/bi";
  
    //For Bold BI Enterprise edition, it should be like `site/site1`. For Bold BI Cloud, it should be empty string.
    public siteIdentifier = "site/site1";
  
    //Url of the GetDetails action in ValuesController of the ASP.NET Core application
    public authorizationUrl= "api/boldbiembed/getdetails";
  
    //Url of the GetDashboards action in ValuesController of the ASP.NET Core application
    public getDashboardsUrl= "api/boldbiembed/getdashboards";

    public getEmbedConfigUrl= "api/boldbiembed/getdata";

    public configValue: any;
      
    public dashboards: any;
  
    public baseUrl: any;

    public embedConfig: any;
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService, private dashboardService: DashboardService) {
    }

  ngOnInit() {

    this._app.GetEmbedConfig(this.apiHost + this.getEmbedConfigUrl).subscribe(data => {
      this.dashboards = <any>data;
      this.dashboardService.setEmbedConfig(this.dashboards);
      if (this.dashboards.Environment == "enterprise" || this.dashboards.Environment == "onpremise") {
        this.baseUrl = this.dashboards.ServerUrl + "/" + this.dashboards.SiteIdentifier;
        this.dashboardServerApiUrl = this.dashboards.rootUrl + "/api/" + this.dashboards.SiteIdentifier;
      } else {
        this.baseUrl = this.dashboards.ServerUrl;
        this.dashboardServerApiUrl = this.dashboards.ServerUrl + "/api";
      }
    })
    // this._app.GetEmbedConfig(this.apiHost + this.getEmbedConfigUrl).subscribe(data => {
    //   this.dashboards = <any>data;
    //   embedConfig = this.dashboards;
    //   if (this.dashboards.Environment == "enterprise" || this.dashboards.Environment == "onpremise") {
    //     this.baseUrl = this.dashboards.ServerUrl + "/" + this.dashboards.SiteIdentifier;
    //     this.dashboardServerApiUrl = this.dashboards.rootUrl + "/api/" + this.dashboards.SiteIdentifier;
    //   }
    //   else {
    //     this.baseUrl = this.dashboards.ServerUrl;
    //     this.dashboardServerApiUrl = this.dashboards.ServerUrl + "/api";
    //   }
  //   })
  // }
  }
}

