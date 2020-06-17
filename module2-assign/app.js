(function () {
'use strict';

angular.module('ControllerAsApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingService', ShoppingService);



// LIST #1 - controller
ToBuyController.$inject = ['ShoppingService'];
function ToBuyController(ShoppingService) {
  var list1 = this;

  // Use factory to create new shopping list service

  list1.items = ShoppingService.getItems();
  list1.removeItem = function (itemIndex) {
  ShoppingService.removeItem(itemIndex);
};

};

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingService'];
function AlreadyBoughtController(ShoppingService) {
  var list2 = this;

  list2.boughtItems = ShoppingService.boughtItems();

};



// If not specified, maxItems assumed unlimited
function ShoppingService() {
  var service = this;

  // List of shopping items
    var items = [];
    var boughtItems = [];
    var item1 =
    {
      name: "Milk",
      quantity: "2"
    };
    var item2 =
    {
    name: "Honey",
    quantity: "2"
    };
    var item3 =
    {
    name: "Tea",
    quantity: "2"
    };
    var item4 =
    {
    name: "Syrup",
    quantity: "2"
    };
    var item5 =
    {
    name: "Chocolate",
    quantity: "2"
    };

    items.push(item1,item2,item3,item4,item5);


  service.removeItem = function(itemIndex){
    var deletedElement = items.splice(itemIndex, 1);
    boughtItems.push(deletedElement[0]);

  };

  service.getItems = function () {
    return items;
  };

  service.boughtItems = function (){
    return boughtItems;
  };


};

})();
