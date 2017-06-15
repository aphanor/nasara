var nas = angular.module('nasara', ['angular-loading-bar', 'ngAnimate', 'ngRoute', 'ui.materialize']);

nas.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {   

    $routeProvider.when('/a-propos', {
        templateUrl: 'views/a-propos.html',
        controller: 'sa'
    }).when('/programmation', {
        templateUrl: 'views/programmation.html',
        controller: 'sa'
    }).when('/inscription', {
        templateUrl: 'views/insert.html',
        controller: 'sa'
    }).when('/forum', {
        templateUrl: 'views/forum.html',
        controller: 'sa'
    }).when('/bibliotheque', {
        templateUrl: 'views/bibliotheque.html',
        controller: 'sa'
    }).when('/gallerie', {
        templateUrl: 'views/gallerie.html',
        controller: 'sa'
    }).when('/partenaires', {
        templateUrl: 'views/partenaire.html',
        controller: 'sa'
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'sa'
    }).when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'sa'
    });
    //$locationProvider.html5Mode(true).hashPrefix('!');
/*
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });
*/
    
}])

nas.controller("sa", ['$scope', '$http', '$timeout', '$q', '$log', function($scope, $http, $timeout, $q, $log) {
    
/*
    $scope.cours = {
        data: [{
            id: '1',
            name: 'Dimanche 23 avril 2017 de 14h à 16h'
        }, {
            id: '2',
            name: 'Dimanche 7 mai 2017 de 14h à 16h'
        }, {
            id: '3',
            name: 'Dimanche 21 mai 2017 de 14h à 16h'
        }]
    };
    
    $scope.cour = '1';
*/

/*
    var dateFrom = "02/05/2013";
    var dateTo = "02/09/2013";
    var dateCheck = "02/07/2013";
    
    var d1 = dateFrom.split("/");
    var d2 = dateTo.split("/");
    var c = dateCheck.split("/");
    
    var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
    var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
    var check = new Date(c[2], parseInt(c[1])-1, c[0]);
    
    console.log(check > from && check < to)
*/
    
    
    $scope.submitIns = function() {
        $http.post('/inscription', $scope.inscription, 'Content-Type: application/json;').then(function (response) {
            console.log(response);
        }, function (response) {
            console.log(response);
        });
        $scope.inscrit = 'true';
    }
}]);