import * as angular from 'angular';

import '@uirouter/angularjs';
// import '@uirouter/angularjs/release/stateEvents';
import 'angular-ui-router-default';

import 'angular-animate';

var module = angular
	.module('about', ['ngAnimate', 'ui.router', 'ui.router.default',]);

import Config from './config'
Config(module);

import Controllers from './controllers';
Controllers(module); 

import Directives from './directives'
Directives(module);

import Factories from './factories';
Factories(module);

import Filters from './filters';
Filters(module);