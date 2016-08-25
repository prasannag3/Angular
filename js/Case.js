 var app9 = angular.module('app9', ['weatherFilters']);

app9.controller('mainCtrl',function($scope){

  $scope.students = [
    {name : "Prasanna", gpa:8.75},
    {name : "Mahesh", gpa:8.15},
    {name : "Santhosh", gpa:8.55},
    {name : "Ramcharan", gpa:8.45}
  ];

  $scope.student = {
    gpas:[
      {name : "Prasanna", gpa:8.75},
      {name : "Mahesh", gpa:8.15},
      {name : "Santhosh", gpa:8.55},
      {name : "Ramcharan", gpa:8.45}
    ]
  };

  $scope.currDate = new Date();
  $scope.randomStr = "Some contents yaar";

  $scope.randArray = [
    "Tomato","Potato","Bread","Butter","Jam"
  ];

  $scope.weather = [
    {day: "Monday", rain:false},
    {day: "Tuesday", rain:true}
  ];

});
