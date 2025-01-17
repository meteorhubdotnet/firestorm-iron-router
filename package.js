Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-router',
  summary: 'Fork of Iron Router for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-router'
});

Npm.depends({
  'body-parser': '1.19.0'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');
  // meteor dependencies
  api.use('underscore@1.0.12');
  api.use('webapp@1.13.4', 'server');
  api.use('tracker@1.3.1', 'client');
  api.use('blaze@2.6.2');
  api.use('templating@1.4.2');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // main namespace and utils
  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  // ui layout
  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.15');

  // connect like middleware stack for client/server
  api.use('meteorhubdotnet:firestorm-iron-middleware-stack@1.0.15');

  // client and server side url utilities and compiling
  api.use('meteorhubdotnet:firestorm-iron-url@1.0.15');

  // for reactive urls and pushState in the browser
  api.use('meteorhubdotnet:firestorm-iron-location@1.0.15');

  // for RouteController which inherits from this
  api.use('meteorhubdotnet:firestorm-iron-controller@1.0.15');

  api.addFiles('lib/current_options.js');
  api.addFiles('lib/http_methods.js');
  api.addFiles('lib/route_controller.js');
  api.addFiles('lib/route_controller_server.js', 'server');
  api.addFiles('lib/route_controller_client.js', 'client');
  api.addFiles('lib/route.js');
  api.addFiles('lib/router.js');
  api.addFiles('lib/hooks.js');
  api.addFiles('lib/helpers.js');
  api.addFiles('lib/router_client.js', 'client');
  api.addFiles('lib/body_parser_server.js', 'server');
  api.addFiles('lib/router_server.js', 'server');
  api.addFiles('lib/plugins.js');
  api.addFiles('lib/global_router.js');
  api.addFiles('lib/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');
});

