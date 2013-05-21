/// <reference path="../../DefinitelyTyped/durandal/durandal.d.ts" />

import app = module('durandal/app');
import locator = module('durandal/viewLocator');
import system = module('durandal/system');
import router = module('durandal/plugins/router');


//>>excludeStart("build", true);
system.debug(true);
//>>excludeEnd("build");

app.title = 'Durandal Starter Kit';
app.start().then(function () {
    //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
    //Look for partial views in a 'views' folder in the root.
    locator.useConvention();

    //configure routing
    router.useConvention();
    router.mapNav('welcome');
    //router.mapNav('flickr');

    app.adaptToDevice();

    //Show the app by setting the root view model for our application with a transition.
    app.setRoot('viewmodels/shell', 'entrance');
});