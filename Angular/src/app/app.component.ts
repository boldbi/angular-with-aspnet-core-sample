import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'AngularSample';

  //ASP.NET Core application would be run on https://localhost:5001;http://localhost:5000, which needs to be set as `apiHost`
  public apiHost="http://localhost:5000/";
  
  //Url of the TokenGeneration action in BoldBIEmbedController of the ASP.NET Core application
  public tokenGenerationUrl = "api/boldbiembed/tokengeneration";

  public getEmbedConfigUrl = "api/boldbiembed/getdata";

  public embedConfig: any;

  public dashboards: any;

  public baseUrl: any;

  public dashboardServerApiUrl!: string;

  constructor(private _app: appService) {
  }

  ngOnInit() {
  }
}