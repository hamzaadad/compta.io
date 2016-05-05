(function(){

  angular
       .module('clients')
       .controller('ClientsController', [
          '$scope', 'ClientsDataservice', '$mdSidenav', '$mdBottomSheet', '$log', '$state',
          ClientsController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function ClientsController($scope, ClientsDataservice, $mdSidenav, $mdBottomSheet, $log, $state ) {

  

  }

})();
