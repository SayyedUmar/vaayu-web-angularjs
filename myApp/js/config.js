var app = angular.module('app', ['ui.router','dndLists','rzSlider','ngResource', 'ui.bootstrap','toaster', 'ngAnimate']);


// Define all the routes below
app.config(function (
    $stateProvider,
    $urlRouterProvider
) {
    $stateProvider
        .state("routing", {
            url: "/route",
            templateUrl: "./views/route.html",
            controller: "routeCtrl"
        })
        .state('roster', { 
            url : '/roster', 
            templateUrl : "./views/roster.html", 
            controller : "rosterCtrl"
        }) 
        .state('tripboard', { 
            url : '/tripboard', 
            templateUrl : "./views/trip_board.html", 
            controller : "tripboardCtrl"
        }) 
        .state('contract', { 
            url : '/contract', 
            templateUrl : "./views/contract.html", 
            controller : "contractCtrl",
            params: {
                paramOne: 'CUSTOMER', 
            }
        }) 
        .state('contractList', { 
            url : '/contract-list', 
            templateUrl : "./views/contractList.html", 
            controller : "contractListCtrl"
        })
        .state('contract_list_add', { 
            url : '/contract_list_add', 
            templateUrl : "./views/contract_list_add.html", 
            controller : "contractListAddCtrl"
        }) 
        .state('constraint', { 
            url : '/constraint', 
            templateUrl : "./views/constraint.html", 
            controller : "constraintController"
        }) 


    $urlRouterProvider.otherwise("/tripboard");
});