angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    .controller('loadData',function($scope){
        $scope.title;
        $scope.setTitle = function(val){
            $scope.title = val;
        };
    });

