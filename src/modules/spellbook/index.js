import angular from 'angular';

import routes from './routes.js';

export default angular.module('spellbook', [])
	.config(routes)
	.name;
