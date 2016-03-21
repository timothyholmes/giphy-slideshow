# Giphy Slideshow

Slideshow created using Giphy's API. After building, the app is viewable at:

+ https://localhost:8080 for the distributed version
+ https://localhost:9090 for the source version

[Live Version Here](http://giphy.timholm.es)

## Building

Instructions intended for Linux users. Mac users may need to prefix these comands with the 'sudo' keyword.

To install dependencies

```shell
npm install
```

Note: To use gulp, make sure you have it installed globally on your system

```shell
npm install gulp -g
```

Default build

```shell
gulp default
```

## Gulp tasks

To compile sass, minify css, and minify JS into a 'dist' folder

```shell
gulp build
```

To run webserver

```shell
gulp webserver
```

Watch Sass for changes

```shell
gulp watch
```
