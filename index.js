/* jshint node: true */
'use strict';

var path = require('path'),
    mergeTrees = require('broccoli-merge-trees'),
    Funnel = require('broccoli-funnel'),
    fs = require('fs'), self = {},
    appRef;

module.exports = {
  name: 'om-theme',

  // treeForPublic: function (tree) {
  //       var extras, treePath;

  //       tree = this._super.treeForPublic.call(this, tree);

  //       treePath = path.join('node_modules', 'om-theme', 'styles');
  //       if (fs.existsSync(treePath) !== true) {
  //           treePath = path.join('vendor', 'styles');
  //       }

  //       extras = new Funnel(treePath, {
  //           srcDir: '/',
  //           include: ['Material/*.*', 'fonts/DejaVu/*.*', 'images/*.*', 'textures/*.*'],
  //           destDir: '/assets'
  //       });

  //       return mergeTrees([tree, extras]);
  //   },
  included: function (app) {
        var modulePath, env;

        this.app = app;
        appRef = app;
        self.appOptions = app.options;
        self.addon = this;
        app.import(app.bowerDirectory + "/bootstrap/dist/js/bootstrap.min.js");
        app.import(app.bowerDirectory + "/bootstrap/dist/css/bootstrap.min.css");

        app.import(app.bowerDirectory + "/bootstrap/dist/fonts/glyphicons-halflings-regular.woff", {destDir: 'fonts'});
        app.import(app.bowerDirectory + "/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2", {destDir: 'fonts'});
        app.import(app.bowerDirectory + "/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf", {destDir: 'fonts'});

        // this.app.import('vendor/kendo-ui/styles/kendo.common-material.min.css');
        // this.app.import('vendor/kendo-ui/styles/kendo.rtl.min.css');

        // this.app.import('vendor/kendo-ui/styles/kendo.material.min.css');

        // this.app.import('vendor/kendo-ui/styles/kendo.dataviz.min.css');
        // this.app.import('vendor/kendo-ui/styles/kendo.dataviz.material.min.css');
        // this.app.import('vendor/highcharts/highmaps/js/world.js');

        // env = process.env.EMBER_ENV || 'development';
        // if (env !== 'production') {
        //     this.app.import('vendor/kendo-ui/js/kendo.custom.min.js');
        // }

        // modulePath      = path.relative(app.project.root, __dirname);
        // app.options.sassOptions = app.options.sassOptions || {};
        // app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

        // console.log(path.join(modulePath, 'addon', 'styles', 'includes'));
        // app.options.sassOptions.includePaths.push(path.join(modulePath, 'addon', 'styles', 'includes'));

        this._super.included(app);
    }
};
