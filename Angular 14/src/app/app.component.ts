import { Component } from '@angular/core';
import { appService } from './app.service';

var embedConfig;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

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
  
    public dashboardServerApiUrl!: string;
    
    constructor(private _app: appService) {
    }

    ngOnInit() {
     
    }
  }

