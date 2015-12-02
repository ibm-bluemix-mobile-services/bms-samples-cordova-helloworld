# HelloWorld application for IBM MobileFirst Services on IBM Bluemix

The HelloWorld samples contains a Cordova project that you can use to learn.

### Downloading the samples

Clone the samples from Github with the following command:
	
	git clone https://github.com/ibm-bluemix-mobile-services/bms-samples-cordova-helloworld
  
### Configure the front end in the HelloWorld sample

1. Navigate to the bms-samples-cordova-helloworld directory where the project was cloned.
2. Open 'index.js' located at [your-directory]/www/js/index.js
3. Replace the \<APPLICATION_ROUTE\> and \<APPLICATION_GUID\> with your Bluemix application ID and route.

Javascript:

	// Bluemix credentials
	route: "<APPLICATION_ROUTE>",
	guid: "<APPLICATION_GUID>",

!!! Don't forget comma after the string !!!
