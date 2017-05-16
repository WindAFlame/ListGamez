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
    })
    .controller('formCtrl',function($scope){
        // DATA OBJECT FOR FORM
        $scope.form = {};
        $scope.submit = function(value){
            alert("Vous envoyez les infos suivantes : "+value);
            $scope[$attrs.ngForm].$submitted = true;
        }
    });

