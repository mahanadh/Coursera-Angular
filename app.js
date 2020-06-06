

(function (){
'use strict';

angular.module('lunchApp' , []);
.controller('lunchController', function($scope){
  $scope.name = "";
  $scope.result = "Enjoy!";

    $scope.checkDishes = function($scope.name){
      var totalFoodItems = calculateTotalItems($scope.name);
      if(totalFoodItems > 3){
        $scope.result = "Too much";
      };
    };

  function calculateTotalItems(string){
    var totalFood = "";
    var count = string.split(',');
    totalFood = count.length;
    return totalFood;
  };
});


})();
