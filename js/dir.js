angular.module('app10', [])
.directive('jqlDirective',function(){
  return function(scope,element,attrs){
  var players = element.children();
  var listOfPlayers = "";
  for(i=0;i<players.length;i++){
    if(players.eq(i).text()=="ABC"){
    players.eq(i).css("color","red");
    players.eq(i).attr("number","25");
    }
    if(players.eq(i).text()=="Hank Aaron"){
      players.eq(i).addClass("thick");
    }
    listOfPlayers +=players.eq(i).text()+ ",";

    angular.element(document.querySelector('#childrenList')).text(listOfPlayers);

    var anum = angular.element(document.querySelector('#abc')).attr("number");

     angular.element(document.querySelector('#abc1')).text(anum);

      angular.element(document.querySelector('#hank')).removeClass("thick");


      var isHankBold =  angular.element(document.querySelector('#hank')).hasClass("thick");
        angular.element(document.querySelector('#hankbold')).text(isHankBold);

      var abcID =   angular.element(document.querySelector('#abc')).prop("id");

        angular.element(document.querySelector('#abcid')).text(abcID);

  }
  }
})
.controller("mainCtrl",function($scope){

})
