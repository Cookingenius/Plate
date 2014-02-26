# Plate
[![Build Status](https://travis-ci.org/Cookingenius/Plate.png?branch=master)](https://travis-ci.org/Cookingenius/Plate)
![Dependencies Status](https://david-dm.org/Cookingenius/Plate.png)

Frontend for Cookingenius.
Using AngularJS.

## Install
To start your own project, you can clone that project, get rid of the history, change the git origin and start working by following the snippet below
```bash
$ git clone https://github.com/Cookingenius/Plate.git myproject
$ git submodule init
$ git submodule update
$ sudo npm -g install gulp
$ npm rebuild
$ gulp --require coffee-script/register
```

## Build system
This uses gulp (http://gulpjs.com/) so you can call any of the tasks defined in the gulpfile.
The default one watches over the files and runs the associated tasks when needed and is called like this:

```bash
$ gulp --require coffee-script/register
```

To build the version to distribute, run the following:
```bash
$ gulp build --require coffee-script/register --type dist
```

To run units + integrations tests (you need the build directory for the integration tests to run):
```bash
$ gulp build --require coffee-script/register
$ cd build && python -m SimpleHTTPServer 8001 > /dev/null 2>&1 &
$ gulp ci --require coffee-script/register
```



