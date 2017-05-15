# aurelia_gridstack
An application that show how to use gridstack in an Aurelia App by Aurelia CLI

## Machine Setup

This app is built on the Aurelia CLI, which has a couple of prerequisites you must install first. If you have previously setup your machine for the Aurelia CLI, you can skip this step.

* Install NodeJS >= 4.x
    * You can [download it here](https://nodejs.org/en/).
* Install NPM 3.x
    * Even though you may have the latest NodeJS, that doesn't mean you have the latest version of NPM. You can check your version with `npm -v`. If you need to update, run `npm install npm -g`.
* Install a Git Client
    * Here's [a nice GUI client](https://desktop.github.com).
    * Here's [a standard client](https://git-scm.com).

Once you have the prerequisites installed, you can install the Aurelia CLI itself. From the command line, use npm to install the CLI globally:

```
npm install aurelia-cli -g
```

> Note: Always run commands from a Bash prompt. Depending on your environment, you may need to use `sudo` when executing npm global installs.

## Application Setup

Once you've setup your machine (or if it's been previous setup), you simply need to install the dependencies. From within the app folder, execute the following command:

```
npm install
```

## Running The App

To run the app, execute the following command from within the app folder:

```
au run --watch
```
See [the CLI documentation](https://github.com/aurelia/cli) for other available commands or type `au help` on the command line.

## Problems

There is a problem with the drag and drop and the resize features.
The gridstack 0.3.0 need to refer `gridstack.min.js` and `gridstack.jQueryUI.min.js`, or only `gridstack.all.js`;

Currently this project just uses the `gridstack.min.js` file because when refer to the `gridstack.jQueryUI.min.js` the following errors occur:

```
Uncaught Error: Mismatched anonymous define() module: function (a,b){function c(a){this.grid=a}var d=window,e=function(a,b,c)
{var d=function(){return console.warn("gridstack.js: Function `"+b+"` is deprecated as of v0.2.5 and has been replaced with 
`"+c+"`. It will be **completely** removed in v1.0."),a.apply(this,arguments)};
...
http://requirejs.org/docs/errors.html#mismatch
    at makeError (vendor-bundle.js:3952)
    at intakeDefines (vendor-bundle.js:5038)
    at vendor-bundle.js:5236
```
```
Uncaught Error: Mismatched anonymous define() module: function (a,b,c){function d(a)
{c.GridStackDragDropPlugin.call(this,a)}window;return
c.GridStackDragDropPlugin.registerPlugin(d),d.prototype=Object.create(c.GridStackDragDropPlugin.prototype),
d.prototype.constructor=d,d.prototype.resizable=function(c,d)
...
http://requirejs.org/docs/errors.html#mismatch
    at makeError (vendor-bundle.js:3952)
    at intakeDefines (vendor-bundle.js:5038)
    at vendor-bundle.js:5236
```

To see this error change `aurelia.json` the line `"main": "gridstack.min",` to `"main": "gridstack.all",`

The same error is related on the gridstack issue https://github.com/troolee/gridstack.js/issues/613



