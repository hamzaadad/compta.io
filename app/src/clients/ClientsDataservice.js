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
    var clients = [
      {
        name:'text-client1',
        ref:'ref1',
        date:1462458740309
      },
      {
        name:'text-client2',
        ref:'ref2',
        date:1462458740309
      },
      {
        name:'text-client3',
        ref:'ref3',
        date:1462458740309
      },
      {
        name:'text-client4',
        ref:'ref4',
        date:1462458740309
      },
      {
        name:'text-client5',
        ref:'ref5',
        date:1462458740309
      },
      {
        name:'text-client6',
        ref:'ref6',
        date:1462458740309
      },
      {
        name:'text-client7',
        ref:'ref7',
        date:1462458740309
      },
      {
        name:'text-client8',
        ref:'ref8',
        date:1462458740309
      },
      {
        name:'text-client9',
        ref:'ref9',
        date:1462458740309
      },
    ];

    // Promise-based API
    return {
      loadAll : function() {
        // Simulate async nature of real remote calls
        return $q.when(clients);
      }
    };
  }

})();
