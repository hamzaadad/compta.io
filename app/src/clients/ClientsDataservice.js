(function(){
  'use strict';

  angular.module('clients')
         .service('ClientsDataservice', ['$q', ClientsDataservice]);

  /**
   * Avatar DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function ClientsDataservice($q){
    var clients = [];

    // Promise-based API
    return {
      loadAll : function() {
        // Simulate async nature of real remote calls
        return $q.when(clients);
      }
    };
  }

})();
