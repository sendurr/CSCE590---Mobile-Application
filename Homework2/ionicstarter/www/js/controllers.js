angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('productsCtrl', function($scope, Products) {
  Products.remove(Products[0]);
  $scope.products = Products.all();
  $scope.remove = function(product) {
    Products.remove(product);
  };
})

.controller('productdetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
})

.controller('addproductCtrl', function($scope,$state,Products) {
 var self=this;
  self.prod_name = "";
  self.quantity = "";
  self.price = "";
  self.category = "";
  self.order_date = new Date();

   $scope.products = Products.all();


  $scope.save=function () {
    // body...
    var input_unfilled=1;
    console.log("save to new page ");
   console.log(self.prod_name+"  "+self.quantity+" this is the category" + self.category);
   console.log($scope.products.length);
   if ( self.prod_name == ''){
     alert("product name empty");
     console.log("product name empty");
     input_unfilled=0;
   }
   else if( self.quantity == ''){
     alert("product quantity empty");
     console.log("product quantity empty");
     input_unfilled=0;
   }
   else if ( self.price == ''){
     alert("product price empty");
     console.log("product price empty");
     input_unfilled=0;
   }
   else if ( self.category == ''){
     alert("product category empty");
     console.log("product category empty");
     input_unfilled=0;
   }
   else if ( self.quantity <= 0){
     alert("Minimum 1 no of quantity to be selected");
     console.log("Minimum 1 no of quantity to be selected");
     input_unfilled=0;
   }
 //now save the info to the Data Object.
    if (input_unfilled == 1){
      console.log(Products.all().length  +" products so far ");
      Products.addproduct(self.prod_name,self.quantity,self.price,self.category,self.order_date );
      console.log(Products.all().length  +" products after addings ");
      $state.go("tab.products");
    }
    // $ionicHistory.goBack();*/

 };
})

;
