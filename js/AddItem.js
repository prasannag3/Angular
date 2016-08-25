var app6 = angular.module("app6", [])
app6.controller("glistCtrl",function($scope){
  $scope.groceries = [
    {item:"Tomatoes", purchased: false},
    {item:"Potatoes", purchased: false},
    {item:"Bread", purchased: false},
    {item:"Butter", purchased: false},
  ];

  $scope.addItem = function(newItem){
  if(!(newItem===undefined || newItem==="")){
    $scope.groceries.push({
    item:newItem, purchased: false
    });
    $scope.missingNewItemError = "";
  }else{
      $scope.missingNewItemError = "Please enter an item";
  }
};
});

app6.controller('userCtrl',function($scope){
  $scope.user = [{
    fName : "Surya",
    lName : "Siva",
    street : "123 Main street",
    subscribe : "subscribe",
    delivery : "Email",
  }];
  $scope.saveUser = function(userInfo){
    if($scope.userForm.$valid){
      $scope.user.push({
        fName : userInfo.fName,
        lName : userInfo.lName,
        street : userInfo.street,
        subscribe : userInfo.subscribe,
        delivery : userInfo.delivery,
      });
      console.log("User Saved");
    }
    else{
      console.console.log("Error Couldnt saveUser");
    }
  };
});
