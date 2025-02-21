# Bold BI Embedded Sample in Angular with ASP.NET Core

This project was created using ASP.NET Core 8.0. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

![Dashboard View](/images/angular-dashboard.png)

## Requirements/Prerequisites

* [.NET Core 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
* [Node.js](https://nodejs.org/en/)

 > **NOTE:** Node.js v18.18 to v20.15 are supported

### Supported browsers
  
* Google Chrome, Microsoft Edge, and Mozilla Firefox.

## Configuration

* Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code?utm_source=github&utm_medium=backlinks) to enable it.
  
    ![Embed Settings](/images/enable-embedsecretkey.png)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file?utm_source=github&utm_medium=backlinks) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](/images/download-embedsecretkey.png)
    ![EmbedConfig Properties](/images/embedconfig-file.png)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/ASP.NET%20Core/BoldBI.Embed.Sample) within the application. Please ensure you have placed it in the application, as shown in the following image.

    ![EmbedConfig image](/images/core-embedconfig-location.png)

## Run a Sample Using Command Line Interface

### ASP.NET Core sample via CLI

  1. Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/ASP.NET%20Core/BoldBI.Embed.Sample) where the project is located.

  2. Execute the command `dotnet restore` to restore the necessary packages. Once the packages have been successfully restored, use the `dotnet build` command to build the project.
  
  3. Finally, run the application using the command `dotnet run`. Once the application has started, it will display a URL in the command line interface, typically something like http://localhost:5000. Copy this URL and paste it into your default web browser, appending `/api/boldbiembed` to it.

### Angular sample via CLI

  1. Open the command prompt and navigate to the specified file [location](https://github.com/boldbi/angular-with-aspnet-core-sample/tree/master/Angular%2014) where the project is located.

  2. To install all dependent packages, use the following command `npm install`.

  3. Finally, run the application using the command `npm start`. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:4200>). Copy this URL and paste it into your default web browser.

## Developer IDE

* Visual studio code(<https://code.visualstudio.com/download>)

## Run a Sample Using Visual Studio Code

### ASP.NET Core sample via VS Code

  1. Open the ASP.NET Core sample in Visual Studio Code.

  2. Open the terminal in Visual Studio Code and execute the command `dotnet restore` to restore the required dependencies.

  3. Build your .NET project by executing the `dotnet build` command in the terminal.
  
  4. Finally, run the application using the command `dotnet run`. Once the application has started, it will display a URL in the command line interface, typically something like http://localhost:5000. Copy this URL and paste it into your default web browser, appending `/api/boldbiembed` to it, as shown in the image below.

      ![dashboard image](/images/core-running.png)

### Angular sample via VS Code

  1. Open the Angular sample in Visual Studio Code.

  2. To install all dependent packages, use the following command `npm install`.

  3. To run the application, use the command `npm start` in the terminal. After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., <http://localhost:4200>). Copy this URL and paste it into your default web browser.

     ![dashboard view](/images/angular-dashboard.png)

Please refer to the [help documentation](https://help.boldbi.com/embedding-options/embedding-sdk/samples/angular-with-javascript/#how-to-run-the-sample?utm_source=github&utm_medium=backlinks) to know how to run the sample.

## Important notes

It is recommended not to store passwords and sensitive information in configuration files for security reasons in a real-world application. Instead, it would be best if you considered using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed?utm_source=github&utm_medium=backlinks).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/?utm_source=github&utm_medium=backlinks).
