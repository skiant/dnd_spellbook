angular.module('spellbook')
.directive('sbLevelPage', function (){
	return {
		templateUrl: '/templates/spellbook-page.html',
		replace: true,
		scope: {
			level: "="
		},
		controller: function ($scope, spellBookDB, $rootScope, $localStorage) {
			$scope.data = {selectedIndex: 0};
			$scope.availableSpells = spellBookDB[$scope.level]

			if(!$localStorage.preparedSpells) {$localStorage.preparedSpells = {};}

			$scope.preparedSpells = $localStorage.preparedSpells[$scope.level] || [];

			$localStorage.preparedSpells[$scope.level] = $scope.preparedSpells;

			$scope.spellsPreparationPhase = false;
			$rootScope.$on('togglePreparation', function () {
				$scope.spellsPreparationPhase = !$scope.spellsPreparationPhase;
			});

			$scope.$watch('spellsPreparationPhase', function (isPreparing) {
				if (isPreparing) {
					$scope.data.selectedIndex = 1;
				} else {
					$scope.data.selectedIndex = 0;
				}
			})

			$rootScope.$on('getRest', function () {
				_.each($scope.preparedSpells, function (spell) {
					spell.cast = false;
				})
			})

			$scope.prepare = function (index) {
				$scope.preparedSpells.push({title: $scope.availableSpells[index]});
			}

			$scope.unPrepare = function (index) {
				$scope.preparedSpells.splice(_.findIndex($scope.preparedSpells, {title: $scope.availableSpells[index]}), 1);
			}

			$scope.preparedCount = function (index) {
				return _.filter($scope.preparedSpells, {title: $scope.availableSpells[index]}).length;
			}
		}
	}
});
