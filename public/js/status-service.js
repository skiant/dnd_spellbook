angular.module('spellbook')
.service('status', function ($rootScope) {
  this.rest = function () {
    $rootScope.$broadcast('getRest');
  };

  var preparatingSpells = false;
  this.startPrep = function () {
    preparatingSpells = true;
  }
  this.endPrep = function () {
    preparatingSpells = false;
  }

  this.isPreparing = function () {
    return preparatingSpells;
  }
});
