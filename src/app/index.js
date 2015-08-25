import angular from 'angular';

import pouchDB from 'angular-pouchdb';
import uiRouter from 'angular-ui-router';
import aria from 'angular-aria';
import ngMaterial from 'angular-material';

import routes from './routes.js';
import spellbook from '../modules/spellbook';

export default angular.module('spellbook-app', [pouchDB, uiRouter, aria, ngMaterial, spellbook])
	.config(routes)
	.name;

// bootstrap the application
angular.element(document).ready(() => {
	angular.bootstrap(document, ['spellbook-app']);
});
