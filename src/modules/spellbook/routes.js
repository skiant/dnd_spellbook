import template from './template.html';

function routing($stateProvider) {
	$stateProvider
	.state('spellbook', {
		url: '/spellbook',
		template: template,
	});
}
routing.$inject = ['$stateProvider'];

export default routing;
