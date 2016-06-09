'use strict';

angular.module('rentfinds01.rentals', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rentals', {
    templateUrl: 'rentals/rentals.html',
    controller: 'RentalsCtrl'
  }).
  when('/details/:id', {
    templateUrl: 'rentals/details.html',
    controller: 'DetailsCtrl'
  })
}])

.controller('RentalsCtrl', [function() {
    console.log('RentalsCtrl working..');
}])

.controller('DetailsCtrl', [function() {
    console.log('Details working..');
}])
