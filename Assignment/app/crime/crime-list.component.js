// 'use strict';
//
// // Register `phoneList` component, along with its associated controller and template
// angular.
//   module('crimeList')
//   .controller('controller',[
//
//     function CrimeListController($http) {
//       var self = this;
//       //self.orderProp = 'age';
//
//       $http.get('data/Datas.json').then(function(response) {
//         self.crimes = response.data;
//   });
// }])
//
//
//   .directive('crimeList',function() {
//     return {
//       templateUrl: 'crime/crime-list.template.html'
//     };
//     });

'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('crimeList').
  component('crimeList', {
    templateUrl: 'crime/crime-list.template.html',
    controller: function CrimeListController($http) {
      var self = this;
      self.currentPage=0;
      self.pageSize = 4;
      self.sortType = 'year';
      self.sortReverse = true;

      $http.get('data/Datas.json').then(function(response) {
        self.crimes = response.data;
       self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
      });

      self.add = function add(yr,ab,un){
        self.crimes.push({'year':yr, 'Below500':un,'Above500':ab});
          self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
      };

      self.removeItem = function removeItem(crime){
        var index = self.crimes.indexOf(crime);
        if(index !== -1){
        self.crimes.splice(index,1);
  self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
      }
    };

    // self.set = function set(){
    //     self.pageCount =  Math.ceil(self.crimes.length/self.pageSize);
    //   //  console.log(self.pageCount);
    // //  self.currentPage = self.pageCount;
    // };



    }
  });
