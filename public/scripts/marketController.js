var myApp = angular.module('myApp', []);

myApp.controller('MarketController', function() {
  const vm = this;


  vm.itemArray = [];
  class MarketItem {
    constructor(name, url, price, inventory) {
      this.name = name;
      this.image = url;
      this.price = price;
      this.inventory = inventory;
    }


  };

  let items = [
    ['Apple', '../images/apple.png', 5, 0],
    ['Lemon', '../images/lemon.png', 5, 0],
    ['Pear', '../images/pear.png', 5, 0],
    ['Watermelon', '../images/watermelon.png', 5, 0],
    ['Monitor', '../images/monitor.png', 5, 0],
    ['Phone', '../images/phone.png', 5, 0],
    ['Printer', '../images/printer.png', 5, 0],
    ['Toaster', '../images/toaster.png', 5, 0],
    ['Coin', '../images/coin.png', 5, 0],
    ['Wine', '../images/wine.png', 5, 0],
    ['Stuffed Animal', '../images/wine.png', 5, 0],
    ['Jewelry', '../images/wine.png', 5, 0]
  ];



  for (var i = 0; i < items.length; i++) {
    var item = new MarketItem(...items[i]);
    item.price = Math.random() * 9.99;
    item.price = item.price.toFixed(2);
    vm.itemArray.push(item);
  };
  console.log(vm.itemArray);


}); //end controller
