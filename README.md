# BoldBI Embedding Angular with ASP.NET Core Samples

This project was generated using ASP.NET Core version 6.0 or a later version that is installed on your system before it was compiled. This Bold BI Angular with Asp.Net Core sample contains Angular 14 as front-end sample and Asp.Net Core as back-end sample. This sample demonstrates the dashboard rendering with the list of dashboards available in your Bold BI server.

## Dashboard view

![Dashboard View](https://github.com/boldbi/aspnet-core-sample/assets/91586758/4af68f49-ffc0-400a-a323-55a3f3600a1d)

 ## Requirements/Prerequisites
 
 * [.NET Core 6.0](https://dotnet.microsoft.com/en-us/download/dotnet-core)
 * [Node.js](https://nodejs.org/en/)

 ### Help link

 * https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/

 ### Supported browsers
  
  * Google Chrome, Microsoft Edge, Mozilla Firefox.

 ## Configuration

  * Ensure that you have enabled embed authentication on the embed settings [page](https://github.com/boldbi/aspnet-core-sample/assets/91586758/68695d1a-ebd0-4577-a6bb-d37e89e98379). If it is not enabled, enable it. Please refer to the following image.
  ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * Download the embedConfig.json file by referring to this [link](https://help.boldbi.com/embedded-bi/site-administration/embed-settings/#get-embed-configuration-file). Please refer to the following image.
    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded embedConfig.json file and place it into the following [location](https://github.com/boldbi/aspnet-core-sample/tree/master/BoldBI.Embed.Sample) of the application. Please refer to the following image.
  ![EmbedConfig image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/bdb83a3e-02e4-4e99-ad57-717438e5ec5c)

## How to run sample using command prompt 
    
  #### ASP.NET Core sample: 

  1. Open command prompt in this file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/ASP.NET%20Core/BoldBI.Embed.Sample) of the back-end ASP.NET Core sample.

  2. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.
  
  3. Run the application using the command `dotnet run`.

  #### Angular sample:

  1. Open command prompt in this file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular%2014) of the Angular sample.

  2. To install all dependent packages, use the below command `npm install`. 

  3. To install Angular 14 use following command `npm i @angular/cli@14.0.6`. Once installed, ensure the installed version using the command <code>ng --version</code>.

  4. To install the Bold BI Embedded SDK package using the following command, `npm install -save @boldbi/boldbi-embedded-sdk`.

  4. To run the samples, use the following command `npm start`.

 ## Developer IDE

  * Visual studio code(https://code.visualstudio.com/download)

  ### How to run sample using visual studio code

  #### ASP.NET Core sample: 

  1. Open the Visual Studio code in this file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/ASP.NET%20Core/BoldBI.Embed.Sample) of the back-end ASP.NET Core sample.

  2. Open the terminal in Visual Studio Code. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been restored, use the `dotnet build` command to build the project.
  
  3. Run the application using the command `dotnet run`. After executing the command, the application will automatically launch in the default browser, accessible at the specific port number (https://localhost:5001/api/boldbiembed). Please refer to the following image.
    
      ![dashboard image](https://github.com/boldbi/aspnet-core-sample/assets/91586758/cc794823-84a3-45cb-92a5-f38991902121)

  #### Angular sample:

 1. Open Visual Studio code in this file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular%2014) of the Angular sample.

  2. To install all dependent packages, use the below command `npm install`. 

  3. To install Angular 14 use following command `npm i @angular/cli@14.0.6`. Once installed, ensure the installed version using the command <code>ng --version</code>.

  4. To install the Bold BI Embedded SDK package using the following command, `npm install -save @boldbi/boldbi-embedded-sdk`.

  4. To run the samples, use the following command `npm start`. After executing the command, the application will automatically launch in the default browser, accessible at the specific port number (http://localhost:3000). Please refer to the following image.

     ![dashboard view](https://github.com/boldbi/aspnet-core-sample/assets/91586758/7a9786ba-6dc1-4661-b8bb-3bad3d6dcc9a)


Please refer to the [help documentation](https://help.boldbi.com/embedded-bi/javascript-based/samples/v3.3.40-or-later/angular-with-javascript/#how-to-run-the-sample) to know how to run the sample.

## Important notes

It is recommended to not store passwords and sensitive information in configuration files for security reasons, in a real-world application. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).


## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
