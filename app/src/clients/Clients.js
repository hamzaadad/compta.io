;(function(){

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('clients', [ 'ngMaterial' , 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  //
  // Now set up the states
  $stateProvider
    .state('clients', {
      url: "/clients",
      templateUrl:"src/clients/index.html",
      controller:"ClientsController",
      controllerAs: "clients"
    })
    .state('clients.client',{
      url:'/add',
      templateUrl:"src/clients/form.html",
      controller:"ClientsController",
      controllerAs: "clients",
    })
  });


})();
