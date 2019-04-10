(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.result = "";

  $scope.checkSplit = function () {
    let nameSplit = $scope.name.split(",");
    let splitLength = nameSplit.length;

    if (splitLength <= 3) {
      $scope.result = "Less then tree!"
    } else {
      $scope.result = "Greath then tree!"
    }
  };
}

})();
