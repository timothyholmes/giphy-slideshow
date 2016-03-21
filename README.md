# Giphy Slideshow

Slideshow created using Giphy's API.

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

To compile sass, minify css and js, and run the webserver at localhost:8080.

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
