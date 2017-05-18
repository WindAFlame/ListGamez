angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    .controller('formCtrl',function($scope){
        $scope.form = {};
        $scope.submit = function(){
            alert("Vous envoyez les infos suivantes : "+$scope.textI);
        }
    });

