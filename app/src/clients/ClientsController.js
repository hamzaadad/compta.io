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
    $scope.clientList = [];
    $scope.par = 'name';
    ClientsDataservice
          .loadAll()
          .then( function( clients ) {
            console.log(clients);
            $scope.clientList = [].concat(clients);
            $scope.selectedClient = $scope.clientList[0]
          });
          $scope.go = function(to){
            console.log('go to', to);
            $state.go('.client', {ref:to})
          }
    $scope.select = function(client){
      $scope.selectedClient = client
    }
  }

})();
