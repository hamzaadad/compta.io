/*
*  Starting point of your app
*/
(function(){
'use strict';

  angular
      .module('starterApp', ['ngMaterial', 'dashboard', 'clients'])
      .config( function($mdThemingProvider, $mdIconProvider) {

      $mdIconProvider
        .defaultIconSet("assets/svg/avatars.svg", 128 )
        .icon("menu", "assets/svg/ic_menu_24px.svg", 24)
        .icon("home", "assets/svg/home.svg", 24)
        .icon("admin", "assets/svg/admin.svg", 24)
        .icon("agenda", "assets/svg/agenda.svg", 24)
        .icon("clients", "assets/svg/clients.svg", 24)
        .icon("facture", "assets/svg/facture.svg", 24)
      


        // Use the 'brown' theme - override default 'blue' theme
        //$mdThemingProvider.theme('default')
        //  .primaryPalette('brown')
        //  .accentPalette('red');

      });

})();
