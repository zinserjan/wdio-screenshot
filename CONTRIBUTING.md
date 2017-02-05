# Contributing

## Issues
Found an issue? Missing a feature or something else? We look forward to receiving your feedback.

For bug reports please make sure that you
* clearly describe your problem
* provide us something that allows us to reproduce the problem (a minimal failing example would be awesome)

## Pull Requests

We love pull requests. Here's a quick guide:


1. Fork the repo.

1. Run the tests. We only take pull requests with passing tests, and it's great to know that you have a clean state.

1. Add a test for your change. Only refactoring and documentation changes require no new tests. If you are adding functionality or fixing a bug, we need a test to avoid regressions in future releases.

1. Make the test pass.

1. Push to your fork and submit a pull request.

1. At this point you're waiting on us. We'll give you feedback asap.

**Note:** If you have any problems with a test case don't hesitate to ask us. Just submit your PR and we'll find a solution together :)

### How to run tests

1. Make sure you have all dependencies installed

  ```bash
  $ npm install
  ```

2. Run the tests you need with:

  ```bash
  # if your patch is functional and hasn't something to do with Selenium
  # (e.g. library specific fixes like changes within ./src/utils/)
  $ npm run test

  # the following test commands requires a running webserver
  $ npm run server

  # if your patch is browser specific
  # (e.g. adjustment of screenshot algorithm)
  $ npm run test:local

  # if your patch requires saucelabs
  # requires an valid saucelabs account
  $ SAUCE_USERNAME=<YOUR_USERNAME> SAUCE_ACCESS_KEY=<YOUR_ACCESS_KEY> npm run test:sauce
  ```

### How to test against your project

Wanna test your changes against your real world project? No Problem!

Let's use `npm link` to symlink the fork into your project.

1. switch to the root of this project

1. make sure you have all dependencies installed
  ```bash
  $ npm install
  ```

1. run first step for npm link
  ```bash
  $ npm link
  ```

1. Switch to your real world project

1. and execute the second step for npm link
  ```bash
  $ npm link wdio-screenshot
  ```

Then you are almost ready to go. You just have to build this project initially and whenever you make code changes.
  ```bash
  $ npm run build
  ```

### Syntax rules

Please pay attention on the following syntax rules:

* Basic coding styles are defined within the .editorconfig file.
* Follow the conventions used in the source already.
