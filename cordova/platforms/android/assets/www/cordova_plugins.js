cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.pushwoosh.plugins.pushwoosh/www/PushNotification.js",
        "id": "com.pushwoosh.plugins.pushwoosh.PushNotification",
        "clobbers": [
            "plugins.pushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.0.2-dev",
    "org.apache.cordova.console": "0.2.13",
    "com.pushwoosh.plugins.pushwoosh": "3.6.2"
}
// BOTTOM OF METADATA
});