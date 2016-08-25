var app3 = angular.module('app3', []);
app3.controller('glistCtrl',function($scope){
$scope.groceries = [
  {item:"Tomatoes",purchased:false},
  {item:"Potatoes",purchased:false},
  {item:"Bread",purchased:false},
  {item:"Butter",purchased:false},
];

$scope.getList = function(){
  return $scope.showList ? "ulglist.html":"olglist.html";
}
});
