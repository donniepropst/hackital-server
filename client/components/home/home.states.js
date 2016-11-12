(function(){
    'use strict';
    angular.module('hackital-server.home')
    .config(function($stateProvider){
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: 'components/home/home.html'
            });
    });
})();
