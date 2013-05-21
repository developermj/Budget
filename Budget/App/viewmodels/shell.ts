/// <reference path="../../../DefinitelyTyped/durandal/durandal.d.ts" />

import _router = module('durandal/plugins/router');
import _app = module('durandal/app');

export var router = _router;

export function search() {
	    _app.showMessage('Search not yet implemented...');
}

export function activate() {
	    return _router.activate('welcome');
}