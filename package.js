Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-router',
  summary: 'Fork of Iron Router for Firestorm',
  version: '1.0.4',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-router'
});

Npm.depends({
  'body-parser': '1.19.0'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');
  // meteor dependencies
  api.use('underscore');
  api.use('webapp', 'server');
  api.use('deps', 'client');
  api.use('ui@1.0.13');
  api.use('templating@1.4.0');

  // for cloning
  api.use('ejson');

  // for dynamic scoping with environment variables
  api.use('meteor');

  // main namespace and utils
  api.use('meteorhubdotnet:firestorm-iron-core@1.0.4');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.4');

  // ui layout
  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.4');

  // connect like middleware stack for client/server
  api.use('meteorhubdotnet:firestorm-iron-middleware-stack@1.0.4');

  // client and server side url utilities and compiling
  api.use('meteorhubdotnet:firestorm-iron-url@1.0.4');

  // for reactive urls and pushState in the browser
  api.use('meteorhubdotnet:firestorm-iron-location@1.0.4');

  // for RouteController which inherits from this
  api.use('meteorhubdotnet:firestorm-iron-controller@1.0.4');

  api.add_files('lib/current_options.js');
  api.add_files('lib/http_methods.js');
  api.add_files('lib/route_controller.js');
  api.add_files('lib/route_controller_server.js', 'server');
  api.add_files('lib/route_controller_client.js', 'client');
  api.add_files('lib/route.js');
  api.add_files('lib/router.js');
  api.add_files('lib/hooks.js');
  api.add_files('lib/helpers.js');
  api.add_files('lib/router_client.js', 'client');
  api.add_files('lib/body_parser_server.js', 'server');
  api.add_files('lib/router_server.js', 'server');
  api.add_files('lib/plugins.js');
  api.add_files('lib/global_router.js');
  api.add_files('lib/templates.html');

  // symbol exports
  api.export('Router');
  api.export('RouteController');
});

Package.on_test(function (api) {
  api.use('meteorhubdotnet:firestorm-iron-router');
  api.use('tinytest');
  api.use('test-helpers');

  api.add_files('test/helpers.js');
  api.add_files('test/route_test.js');
  api.add_files('test/router_test.js');
  api.add_files('test/route_controller_test.js');
});
