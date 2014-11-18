angular.module('spellbook')
.controller('actionsController', function($scope, $rootScope){
  $scope.rest = function (){
    $rootScope.$broadcast('getRest');
  };

  $scope.spellsPreparationPhase = false;
  $scope.togglePreparation = function () {
    $rootScope.$broadcast('togglePreparation');
    $scope.spellsPreparationPhase = !$scope.spellsPreparationPhase;
  };
});
