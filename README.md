# Welcome
This repository contains the source code of the Progress NativeScript UI samples application demonstrating the Angular directives. The repository does not contain the source code of Progress NativeScript UI itself but rather uses the npm package:
- `nativescript-ui-chart` [![npm](https://img.shields.io/npm/v/nativescript-ui-chart.svg)](https://www.npmjs.com/package/nativescript-ui-chart)
- `nativescript-ui-listview` [![npm](https://img.shields.io/npm/v/nativescript-ui-listview.svg)](https://www.npmjs.com/package/nativescript-ui-listview)
- `nativescript-ui-sidedrawer` [![npm](https://img.shields.io/npm/v/nativescript-ui-sidedrawer.svg)](https://www.npmjs.com/package/nativescript-ui-sidedrawer)
- `nativescript-ui-calendar` [![npm](https://img.shields.io/npm/v/nativescript-ui-calendar.svg)](https://www.npmjs.com/package/nativescript-ui-calendar)
- `nativescript-ui-autocomplete` [![npm](https://img.shields.io/npm/v/nativescript-ui-autocomplete.svg)](https://www.npmjs.com/package/nativescript-ui-autocomplete)
- `nativescript-ui-dataform` [![npm](https://img.shields.io/npm/v/nativescript-ui-dataform.svg)](https://www.npmjs.com/package/nativescript-ui-dataform)
- `nativescript-ui-gauge` [![npm](https://img.shields.io/npm/v/nativescript-ui-gauge.svg)](https://www.npmjs.com/package/nativescript-ui-gauge)

The `master` branch contains code currently under development and is not meant to be used with the officially released versions of the plugins.

The `release` branch is the default one and is tested with the latest NativeScript UI plugins available.

## Issues
Issues related to Progress NativeScript UI are logged in the https://github.com/telerik/nativescript-ui-feedback repository. Please do not use this repository to log issues.

## Overview
The Progress NativeScript UI samples app resides in the **sdkAngular** folder at root repository level. The folder has a standard NativeScript application structure as described in [this article](http://docs.nativescript.org/angular/tutorial/ng-chapter-0.html). The source code of the samples resides in the folders named after each component available as independent plugin. The currently available components are:

- Calendar
- Chart
- DataForm
- ListView
- SideDrawer
- Gauges
- AutoCompleteTextView

## Running **Progress NativeScript UI** sample app
Make sure you are using NativeScript 3.0+. To see which version of NativeScript you are currently using, type `tns --version` in the console.

Steps to run the sample:

1. `cd sdkAngular`
2. `tns run android` or `tns run ios`


## Release notes
For more information about releases, features and breaking changes you can check out the release notes section in the online documentation:
[Progress NativeScript UI release notes](http://docs.telerik.com/devtools/nativescript-ui/release-notes)

## Enable codelyzer
The project takes advantage of the [codelyzer](https://www.npmjs.com/package/codelyzer) library and its set of tslint rules for static code analysis of the Angular TypeScript projects. In order to enable the codelyzer in Visual Studio Code you need to:
- Install tslint extension in VS code IDE by running the `ext install tslint`
