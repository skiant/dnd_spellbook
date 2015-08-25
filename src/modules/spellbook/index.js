import angular from 'angular';

import routes from './routes.js';
import toolbar from './toolbar';

export default angular.module('spellbook', [])
	.config(routes)
	.directive('toolbar', toolbar)
	.name;
