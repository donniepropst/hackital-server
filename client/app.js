(function(){
    'use strict';
    angular.module('hackital.server', [
        'ui.router',
        'hackital-server.home'
    ])
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    });
})();
