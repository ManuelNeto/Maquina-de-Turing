angular.module('app', ['ui.router', 'ui.router.stateHelper']);

//Require all files here
require('./config/routes.config.js');
require('./components/login/login.controller.js');
require('./components/maquinaTuring/maquinaTuring.controller.js');
require('./components/maquinaTuring/maquinaTuring.html');

//Sass
require('./theme-sass/theme.scss');
