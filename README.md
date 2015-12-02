# HelloWorld Cordova application for IBM MobileFirst Services on IBM Bluemix

The HelloWorld samples contains a Cordova project that you can use to learn.

### Downloading the sample

Clone the samples with the following command:
	
	git clone https://github.com/ibm-bluemix-mobile-services/bms-samples-cordova-helloworld
  
### Configure the front end in the HelloWorld sample

1. Navigate to the directory where the project was cloned.
2. Open 'index.js' located at [your-directory]/www/js/index.js
3. Replace the \<APPLICATION_ROUTE\> and \<APPLICATION_GUID\> with your Bluemix application ID and route.

Javascript:

	// Bluemix credentials
	route: "<APPLICATION_ROUTE>",
	guid: "<APPLICATION_GUID>",

<i>Note: Don't forget commas at the end of each line!</i>

### Run the Cordova App

Now you can run your iOS application in your mobile emulator or on your device.

You will see a single view application with a "PING BLUEMIX" button. When you click this button the application will test the connection from the client to the backend Bluemix application. The application uses the ApplicationRoute specified in index.js in order to test the connection. The application will then display if the connection was successful or unsuccessful. In the unsuccessful state an error will be displayed in the Xcode/Android log, as well as in the application.

<i>Note: A GET request is made to a protected resource on the Node.js runtime on Bluemix. This code has been provided in the MobileFirst Services Starter boilerplate. If the backend application was not created using the MobileFirst Services Starter boilerplate the application will not be able to connect successfully.</i>

### License

This package contains sample code provided in source code form. The samples are licensed under the under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 and may also view the license in the license.txt file within this package. Also see the notices.txt file within this package for additional notices.
