(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.result = "";

  $scope.checkSplit = function () {
    console.log("start -> " + $scope.name);

    if ($scope.name == null || $scope.name.trim().length == 0) {
      console.log("som v ife undefined");
      $scope.result = "Please enter data first"
      return;
    }

    let nameSplit = $scope.name.trim().split(",");
    let splitLength = nameSplit.length;

    console.log(splitLength);

    if (splitLength <= 3) {
      $scope.result = "Enjoy!"
    } else {
      $scope.result = "Too much!"
    }
  };
}

})();
