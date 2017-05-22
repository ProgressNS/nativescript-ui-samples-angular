## !!! IMPORTANT: Issues related to UI for NativeScript are logged in the https://github.com/telerik/nativescript-ui-feedback repository. Please do not use this repository to log issues !!!

# Welcome
This repository contains the source code of the Progress NativeScript UI samples application demonstrating the Angular directives. The repository does not contain the source code of Progress NativeScript UI itself but rather uses the npm package of  `nativescript-telerik-ui-pro` [![npm](https://img.shields.io/npm/v/nativescript-telerik-ui-pro.svg)](https://www.npmjs.com/package/nativescript-telerik-ui-pro) or `nativescript-telerik-ui` [![npm](https://img.shields.io/npm/v/nativescript-telerik-ui.svg)](https://www.npmjs.com/package/nativescript-telerik-ui).

The `master` branch contains code currently under development and is not meant to be used with the officially released version of NativeScript UI.

The `release` branch is the default one and is tested with the latest NativeScript UI version available.

## Issues
Issues related to Progress NativeScript UI are logged in the https://github.com/telerik/nativescript-ui-feedback repository. Please do not use this repository to log issues.

##Overview
The Progress NativeScript UI samples app resides in the **sdkAngular** folder at root repository level. The folder has a standard NativeScript application structure as described in [this article](http://docs.nativescript.org/angular/tutorial/ng-chapter-0.html). The source code of the samples resides in the folders named after each component available in **Progress NativeScript UI**. The currently available components are:

- Calendar
- Chart
- DataForm
- ListView
- SideDrawer

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
