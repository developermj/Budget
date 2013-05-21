define(["require", "exports", 'durandal/plugins/router', 'durandal/app'], function(require, exports, ___router__, ___app__) {
    var _router = ___router__;

    var _app = ___app__;

    exports.router = _router;
    function search() {
        _app.showMessage('Search not yet implemented...');
    }
    exports.search = search;
    function activate() {
        return _router.activate('welcome');
    }
    exports.activate = activate;
})
