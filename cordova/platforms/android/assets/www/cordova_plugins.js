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
        "file": "plugins/com.pubnub.cordova.pubnub/www/pubnub.js",
        "id": "com.pubnub.cordova.pubnub.pubnub",
        "clobbers": [
            "pubnub"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.0.2-dev",
    "org.apache.cordova.console": "0.2.13",
    "com.pubnub.cordova.pubnub": "3.7.10"
}
// BOTTOM OF METADATA
});