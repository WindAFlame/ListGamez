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
        $scope.formData = {
            model: null,
            input: null
        };
        // LIST INPUT
        $scope.formData.input = {
            labelName: {
                type: "text",
                name: "label",
                model: null,
                required: true
            }
        };
        // FONCTIONS
        $scope.submit = function(){
            if ($scope.formData.model.$valid){
                alert("Vous envoyez les infos suivantes : "+$scope.formData.input.labelName.model);
            };
        };
    });

