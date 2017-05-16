angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    .controller('loadData',function($scope){
        $scope.title = "Chargement des données depuis un controller.";
    });

