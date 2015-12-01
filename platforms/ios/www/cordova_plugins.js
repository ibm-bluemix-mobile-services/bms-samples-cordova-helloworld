cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/ibm-mfp-core/www/BMSClient.js",
        "id": "ibm-mfp-core.BMSClient",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "BMSClient"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPRequest.js",
        "id": "ibm-mfp-core.MFPRequest",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPRequest"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPLogger.js",
        "id": "ibm-mfp-core.MFPLogger",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPLogger"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/MFPAnalytics.js",
        "id": "ibm-mfp-core.MFPAnalytics",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "MFPAnalytics"
        ]
    },
    {
        "file": "plugins/ibm-mfp-core/www/AuthorizationManager.js",
        "id": "ibm-mfp-core.AuthorizationManager",
        "pluginId": "ibm-mfp-core",
        "clobbers": [
            "AuthorizationManager"
        ]
    },
    {
        "file": "plugins/ibm-mfp-push/www/MFPPush.js",
        "id": "ibm-mfp-push.MFPPush",
        "pluginId": "ibm-mfp-push",
        "clobbers": [
            "MFPPush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-livereload": "1.0.0-dev",
    "ibm-mfp-core": "0.0.1",
    "ibm-mfp-push": "1.0.0",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});