(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', MyFirstController);

MyFirstController.$inject = ['$scope'];

function MyFirstController($scope){
  $scope.name = "";
  $scope.result = "";
  $scope.color = "";
  $scope.checkFood = function () {
    if (!($scope.name)){
      $scope.result = "Please enter data first";
      $scope.color = "blue";
    }
    else {
    var totalFoodItems = calculateTotalItems($scope.name);
    if(totalFoodItems <= 3){
    $scope.result = "Enjoy";
    $scope.color = "green";

  };
  if (totalFoodItems > 3){
    $scope.result = "Too much";
    $scope.color = "red";

  };
}
};
  function calculateTotalItems(string){
    var totalFood = "";
    var count = string.split(',');
    totalFood = count.length;
    return totalFood;
  };
};

})();

// (function (){
// 'use strict';
//
// angular.module('lunchApp' , []);
// .controller('lunchController', function($scope){
//   $scope.name = "";
//   $scope.result = "Enjoy!";
//
//     $scope.checkDishes = function($scope.name){
//       var totalFoodItems = calculateTotalItems($scope.name);
//       if(totalFoodItems > 3){
//         $scope.result = "Too much";
//       };
//     };
//
//   function calculateTotalItems(string){
//     var totalFood = "";
//     var count = string.split(',');
//     totalFood = count.length;
//     return totalFood;
//   };
// });
//
//
// })();
