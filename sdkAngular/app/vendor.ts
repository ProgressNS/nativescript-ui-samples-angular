// Snapshot the ~/app.css and the theme
const application = require("application");
require("ui/styling/style-scope");
const appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();

require("./vendor-platform");

require("reflect-metadata");
require("@angular/platform-browser");
require("@angular/core");
require("@angular/common");
require("@angular/forms");
require("@angular/http");
require("@angular/router");

require("nativescript-angular/platform-static");
require("nativescript-angular/forms");
require("nativescript-angular/router");

require("nativescript-ui-autocomplete/angular");
require("nativescript-ui-calendar/angular");
require("nativescript-ui-chart/angular");
require("nativescript-ui-dataform/angular");
require("nativescript-ui-gauge/angular");
require("nativescript-ui-listview/angular");
require("nativescript-ui-sidedrawer/angular");

