define(["require", "exports", 'durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router'], function(require, exports, __app__, __locator__, __system__, __router__) {
    var app = __app__;

    var locator = __locator__;

    var system = __system__;

    var router = __router__;

    system.debug(true);
    app.title = 'Durandal Starter Kit';
    app.start().then(function () {
        locator.useConvention();
        router.useConvention();
        router.mapNav('welcome');
        app.adaptToDevice();
        app.setRoot('viewmodels/shell', 'entrance');
    });
})
