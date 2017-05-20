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

## Note

To it works properly, is necessary change the `gridstack.jQueryUI.js` dependency from this:
```
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'lodash', 'gridstack', 'jquery-ui/data', 'jquery-ui/disable-selection', 'jquery-ui/focusable',
            'jquery-ui/form', 'jquery-ui/ie', 'jquery-ui/keycode', 'jquery-ui/labels', 'jquery-ui/jquery-1-7',
            'jquery-ui/plugin', 'jquery-ui/safe-active-element', 'jquery-ui/safe-blur', 'jquery-ui/scroll-parent',
            'jquery-ui/tabbable', 'jquery-ui/unique-id', 'jquery-ui/version', 'jquery-ui/widget',
            'jquery-ui/widgets/mouse', 'jquery-ui/widgets/draggable', 'jquery-ui/widgets/droppable',
            'jquery-ui/widgets/resizable'], factory);
    } else if (typeof exports !== 'undefined') {
    ...
 ```
 
to this:
```
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'lodash', 'gridstack', 'jquery-ui'], factory);
    } else if (typeof exports !== 'undefined') {
    ...
```

It's a temporary hack until go live the [Gridstack 1.0 version](https://dylandreams.com/2017/04/26/gridstack-10-coming-soon/) that will allow change the `jQueryUI` dependency for dragging, dropping, and resizing.


This situation is discussed on the gridstack issue https://github.com/troolee/gridstack.js/issues/613



