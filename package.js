Package.describe({
  name: "urigo:angular",
  summary: "The simplest no-conflict way to use AngularJS with Meteor, Meteorite and Atmosphere Smart Packages.",
  version: "0.8.3",
  git: "https://github.com/Urigo/angular-meteor.git"
});

Package.registerBuildPlugin({
  name: "compileAngularTemplates",
  sources: [
    "plugin/handler.js"
  ],
  use: ['html-tools@1.0.4'],
  npmDependencies : {
    'html-minifier' : '0.6.9'
  }
});

Package.registerBuildPlugin({
  name: 'ngAnnotate',
  sources: [
    'plugin/annotate.js'
  ],
  npmDependencies: {
    'ng-annotate': '0.15.4'
  }
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');

  api.use('angularjs:angular@1.3.15', 'client');
  api.use('minimongo');  // for idStringify
  api.use('observe-sequence');
  api.use('dburles:mongo-collection-instances@0.3.3', 'client'); // For getCollectionByName

  // Files to load in Client only.
  api.add_files([
    // Lib Files
    'lib/angular-hash-key-copier.js',
    'lib/diff-array.js',
    // Module Files
    'modules/angular-meteor-subscribe.js',
    'modules/angular-meteor-collections.js',
    'modules/angular-meteor-meteorCollection.js',
    'modules/angular-meteor-object.js',
    'modules/angular-meteor-template.js',
    'modules/angular-meteor-user.js',
    'modules/angular-meteor-methods.js',
    'modules/angular-meteor-session.js',
    'modules/angular-meteor-reactive-scope.js',
    'modules/angular-meteor-utils.js',
    'modules/angular-meteor-camera.js',
    // Finally load angular-meteor File
    'angular-meteor.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('underscore');
  api.use('minimongo');
  api.use('angularjs:angular@1.3.13', 'client');
  api.use('dburles:mongo-collection-instances@0.3.1', 'client'); // For getCollectionByName
  api.use(['test-helpers'], ['client']);

  api.addFiles([
    'angular-meteor.js',
    'lib/angular-hash-key-copier.js',
    'lib/diff-array.js',
    'modules/angular-meteor-collections.js',
    'modules/angular-meteor-meteorCollection.js',
    'modules/angular-meteor-methods.js',
    'modules/angular-meteor-object.js',
    'modules/angular-meteor-reactive-scope.js',
    'modules/angular-meteor-session.js',
    'modules/angular-meteor-subscribe.js',
    'modules/angular-meteor-template.js',
    'modules/angular-meteor-user.js',
    'modules/angular-meteor-utils.js',
    'modules/angular-meteor-camera.js',
    'test/meteor/tests.js'
  ], ['client']);
});
