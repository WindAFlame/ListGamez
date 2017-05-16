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
        $scope.form = {};
        $scope.form.textI = {};
        $scope.submit = function(){
            alert("Vous envoyez les infos suivantes : "+$scope.textI);
        }
    });

