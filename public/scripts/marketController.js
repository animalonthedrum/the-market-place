var myApp = angular.module('myApp', []);

myApp.controller('MarketController', function() {
  const vm = this;

  vm.itemArray = [];
  vm.balance = 100;



  class MarketItem {
    constructor(name, url, price, inventory) {
      this.name = name;
      this.image = url;
      this.price = price;
      this.inventory = inventory;
    }
    buyItem(index) {
      let newPrice = vm.itemArray[index].price;

      if (vm.balance < newPrice) {
        alert('NO MONEY SUCKA!');
      } else {
        vm.itemArray[index].inventory++;
        vm.balance = vm.balance - newPrice;
      }
    }; //end buyItem

    sellItem(index) {
      let newPrice = Number(vm.itemArray[index].price);

      if (vm.itemArray[index].inventory < 1) {
        alert('Empty Cart');
      } else {
        vm.itemArray[index].inventory--;
        vm.balance = vm.balance + vm.itemArray[index].price;
      }
    }; //end sellItem

    randomPrice(price) {
      let change = ((Math.random() * 50) - 50) / 100;
      console.log('randomPrice', change, 'before', price);
      // vm.price = this.price + change;

      return this.price + change;
      // console.log('after', this.price);
    }; //end randomPrice

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
    ['Stuffed Animal', '../images/teddyBear.png', 5, 0],
    ['Jewelry', '../images/jewelry.png', 5, 0]
  ];



  for (var i = 0; i < items.length; i++) {
    var item = new MarketItem(...items[i]);
    item.price = (Math.random() * 8.99) + 1;
    item.price = Number(item.price.toFixed(2));
    vm.itemArray.push(item);
  }; //end for loop
  console.log(vm.itemArray);

  vm.buy = (index) => {
    item.buyItem(index);
    console.log(vm.balance);
  }; //end buy

  vm.sell = (index) => {
    item.sellItem(index);
  }; //end sell

  vm.change = () => {
    for (var i = 0; i < vm.itemArray.length; i++) {
      vm.itemArray[i].price = item.randomPrice(vm.itemArray[i].price);
    }
  }; //end change
}); //end controller
