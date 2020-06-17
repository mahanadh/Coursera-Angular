(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
// .controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();


}


// // LIST #2 - controller
// ShoppingListController2.$inject = ['ShoppingListFactory'];
// function ShoppingListController2(ShoppingListFactory) {
//   var list2 = this;
//
//   // Use factory to create new shopping list service
//   var shoppingList = ShoppingListFactory(3);
//
//   list2.items = shoppingList.getItems();
//
//   list2.itemName = "";
//   list2.itemQuantity = "";
//
//   list2.addItem = function () {
//     try {
//       shoppingList.addItem(list2.itemName, list2.itemQuantity);
//     } catch (error) {
//       list2.errorMessage = error.message;
//     }
//
//   }
//
//   list2.removeItem = function (itemIndex) {
//     shoppingList.removeItem(itemIndex);
//   };
// }


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

    var item1 = {
      name: "Milk",
      quantity: "10"
    };
    var item2 = {
      name: "Donuts",
      quantity: "10"
    };
    var item2 = {
      name: "Cookies",
      quantity: "10"
    };
    var item4 = {
      name: "Chocolate",
      quantity: "10"
    };
    var item5 = {
      name: "Peanut Butter",
      quantity: "10"
    };

    items.push(item1,item2,item3,item4,item5);

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
