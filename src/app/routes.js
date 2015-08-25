function routing($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/spellbook');

	$stateProvider
	.state('app', {
		abstract: true,
		template: '<ui-view></ui-view>',
	});
}
routing.$inject = ['$urlRouterProvider', '$stateProvider'];

export default routing;
