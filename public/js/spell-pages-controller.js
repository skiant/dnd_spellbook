angular.module('spellbook')
.controller('spellPagesController', function($scope, spellBookDB){
  $scope.activeLevels = function () {
    return _.keys(spellBookDB);
  }
});
