(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('clients', [ 'ngMaterial' , 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  //
  // Now set up the states
  $stateProvider
    .state('clients', {
      url: "/clients",
      //templateUrl:"clients/index.html",
      template:"<h1>asdasdas</h1>",
      controller:"ClientsController",
      controllerAs: "clients"
    })
    .state('client',{
      url:'/clients/{id}',
      templateUrl:"clients/single.html",
      controller:"ClientsController",
      controllerAs: "clients"
    })
  });


})();
