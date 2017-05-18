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
        $scope.form.textI = {};
        $scope.submit = function(){
            alert("Vous envoyez les infos suivantes : "+$scope.textI);
        }
    });

