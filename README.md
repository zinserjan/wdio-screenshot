# wdio-screenshot
> A WebdriverIO plugin. Additional commands for taking screenshots with WebdriverIO.

[![Build Status][build-badge]][build] [![Build Status Windows][build-windows-badge]][build-windows] [![npm package][npm-badge]][npm]


## Browser Support
[![Build Status](https://saucelabs.com/open_sauce/build_matrix/zinserjan.svg)](https://saucelabs.com/u/zinserjan)
- Firefox
- Chrome
- Internet Explorer
- Safari
- iOS<sup>[1](#footnote1)</sup> <sup>[2](#footnote2)</sup> <sup>[3](#footnote3)</sup>

## Installation


Install wdio-screenshot via NPM as usual:

```sh
$ npm install wdio-screenshot --save-dev
```


Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

Note: If you want to improve performance, you can [install GraphicsMagick](#use-graphicsmagick).

## Configuration
Setup wdio-screenshot by adding a `wdio-screenshot` key to the plugins section of your WebdriverIO config.

```js
// wdio.conf.js
exports.config = {
  // ...
  plugins: {
    'wdio-screenshot': {}
  },
  // ...
};
```


## Usage
wdio-screenshot enhances an WebdriverIO instance with the following commands:

* `browser.saveViewportScreenshot([fileName], [{options}]);`
* `browser.saveDocumentScreenshot([fileName], [{options}]);`
* `browser.saveElementScreenshot([fileName], elementSelector, [{options}]);`


All of these provide options that will help you to exclude unrelevant parts (e.g. content). The following options are
available:


* **exclude** `String[]|Object[]` (**not yet implemented**)<br>
  exclude frequently changing parts of your screenshot, you can either pass all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html)
  that queries one or multiple elements or you can define x and y values which stretch a rectangle or polygon

* **hide** `String[]`<br>
  hides all elements queried by all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html) (via `opacity: 0`)

* **remove** `String[]`<br>
  removes all elements queried by all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html) (via `display: none`)

## Use GraphicsMagick
wdio-screenshot uses [GraphicsMagick](http://www.graphicsmagick.org/) for image processing when available. Without GraphicsMagick installed, wdio-screenshot fallbacks to [Jimp](https://github.com/oliver-moran/jimp) - a image processing library written in JS.

If you want to install GraphicsMagick, follow the instructions below.

#### Mac OS X using [Homebrew](http://mxcl.github.io/homebrew/)
```sh
$ brew install graphicsmagick
```

#### Ubuntu using apt-get
```sh
$ sudo apt-get install graphicsmagick
```

#### Windows

Download and install executables for [GraphicsMagick](http://www.graphicsmagick.org/download.html).
Please make sure you install the right binaries desired for your system (32bit vs 64bit).


### License

MIT

---

<sup><a name="footnote1">1</a></sup> Scaling of iOS Simulator has to be 100% for properly recorded screenshots (see [here](https://discuss.appium.io/t/ios-screenshot-not-complete-with-appium-1-4-13/7126))

<sup><a name="footnote2">2</a></sup> Screenshots made with iOS will contain a grey line between the merged screenshots as a result of the stitching & cropping process. This is caused by a shadow below the navigation bar.

<sup><a name="footnote3">3</a></sup> iOS scales the zoom level to fit the website into the viewport when the width of your page is bigger than the viewport. Capturing screenshots of such scaled websites with iOS is experimental and error-prone. If you notice any errors, adjust your viewport settings in your meta tag to disable scaling with `<meta name="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">`


[build-badge]: https://travis-ci.org/zinserjan/wdio-screenshot.svg?branch=master
[build]: https://travis-ci.org/zinserjan/wdio-screenshot
[build-windows-badge]: https://ci.appveyor.com/api/projects/status/ef8r3rjiydld171i/branch/master?svg=true
[build-windows]: https://ci.appveyor.com/project/zinserjan/wdio-screenshot
[npm-badge]: https://img.shields.io/npm/v/wdio-screenshot.svg?style=flat-square
[npm]: https://www.npmjs.org/package/wdio-screenshot
