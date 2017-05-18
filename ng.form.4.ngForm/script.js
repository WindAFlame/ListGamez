angular
    .module('MainApp', [
        // Main Dependancies
        'ngAria',
        'ngMessages',
        'ngSanitize',
        'ngAnimate'
    ])
    .controller('formCtrl',function($scope){
        // DATA OBJECT FOR FORM
        $scope.form = {};
        $scope.submit = function(value){
            alert("Vous envoyez les infos suivantes : "+value);
            $scope[$attrs.ngForm].$submitted = true;
        }
    });

