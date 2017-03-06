# Welcome
This repository contains the source code of the UI for NativeScript samples application demonstrating the Angular 2.0 directives. The repository does not contain the source code of UI for NativeScript itself but rather uses the npm package of  `nativescript-telerik-ui-pro` [![npm](https://img.shields.io/npm/v/nativescript-telerik-ui-pro.svg)](https://www.npmjs.com/package/nativescript-telerik-ui-pro) or `nativescript-telerik-ui` [![npm](https://img.shields.io/npm/v/nativescript-telerik-ui.svg)](https://www.npmjs.com/package/nativescript-telerik-ui).

The `master` branch contains code currently under development and is not meant to be used with the officially released version of NativeScript UI.

The `release` branch is the default one and is tested with the latest NativeScript UI version available.

## Issues
Issues related to UI for NativeScript are logged in the https://github.com/telerik/nativescript-ui-feedback repository. Please do not use this repository to log issues.

##Overview
The UI for NativeScript samples app resides in the **sdkAngular** folder at root repository level. The folder has a standard NativeScript application structure as described in [this article](http://docs.nativescript.org/angular/tutorial/ng-chapter-0.html). The source code of the samples resides in the folders named after each component available in **UI for NativeScript**. The currently available components are:

- Calendar
- Chart
- DataForm
- ListView
- SideDrawer

## Running **UI for NativeScript** sample app
Make sure you are using NativeScript 2.0+. To see which version of NativeScript you are currently using, type `tns --version` in the console.

Steps to run the sample:

1. `cd sdkAngular`
2. `tns run android` or `tns emulate ios`


## Release notes
For more information about releases, features and breaking changes you can check out the release notes section in the online documentation:
[Telerik UI for NativeScript release notes](http://docs.telerik.com/devtools/nativescript-ui/release-notes)

## Enable codelyzer
The project takes advantage of the [codelyzer](https://www.npmjs.com/package/codelyzer) library and its set of tslint rules for static code analysis of the NativeScript + Angular 2 TypeScript project. In order to enable the codelyzer in Visual Studio Code you need to:

- Install tslint globally `npm install -g tslint typescript`
- Install tslint extension in VS code IDE by running the `ext install tslint`
- Add the `"tslint.rulesDirectory": "./node_modules/codelyzer"` to your Visual Studio Code "User Settings" (settings.json)
