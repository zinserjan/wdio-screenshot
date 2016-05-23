# wdio-screenshot

> A WebdriverIO plugin. Additional commands for taking screenshots with WebdriverIO.


## Installation

wdio-screenshot uses [GraphicsMagick](http://www.graphicsmagick.org/) for image processing. To install this
package you'll need to have it preinstalled on your system.

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

After these dependencies are installed you can install wdio-screenshot via NPM as usual:

```sh
$ npm install wdio-screenshot --save-dev
```


Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

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

* `browser.saveViewportScreenshot(fileName, [{options}]);`
* `browser.saveDocumentScreenshot(fileName, [{options}]);`
* `browser.saveElementScreenshot(fileName, elementSelector, [{options}]);`


All of these provide options that will help you to exclude unrelevant parts (e.g. content). The following options are
available:


* **exclude** `String[]|Object[]` (**not yet implemented**)<br>
  exclude frequently changing parts of your screenshot, you can either pass all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html)
  that queries one or multiple elements or you can define x and y values which stretch a rectangle or polygon

* **hide** `String[]`<br>
  hides all elements queried by all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html) (via `visibility: hidden`)

* **remove** `String[]`<br>
  removes all elements queried by all kinds of different [WebdriverIO selector strategies](http://webdriver.io/guide/usage/selectors.html) (via `display: none`)


### License

MIT
