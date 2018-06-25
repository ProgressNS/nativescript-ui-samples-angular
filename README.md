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
Issues related to Progress NativeScript UI are logged in the https://github.com/telerik/nativescript-ui-feedback repository.

## Overview
Progress NativeScript UI samples app resides at root repository level. The source code of the samples resides in a folder named after each component available as independent plugin. The currently available components are:

- AutoCompleteTextView
- Calendar
- Chart
- DataForm
- Gauge
- ListView
- SideDrawer

Each of the above-mentioned folder has a standard NativeScript application structure as described in [this article](http://docs.nativescript.org/getting-started#directory-structure). 

## Running **Progress NativeScript UI** sample app
Make sure you are using the latest NativeScript CLI version by running `npm i nativescript -g`.

Steps to run the sample:

1. `cd listview`
2. `tns run android` or `tns run ios`
