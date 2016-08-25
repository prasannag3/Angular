var app5 = angular.module('app5', []);

app5.controller('eventCtrl',function($scope){
$scope.dayTimeButton = true;

$scope.capitals = [{'city':'Montgomery',
'state':'Alabama'},
{'city':'pheonix',
'state':'Arizona'}
];
});
