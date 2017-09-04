/*
    Angular Dependancies
 */
let app = angular.module('MainApp', [
    // Dependancies
    // - AngularJS
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    // - UI.Router
    'ui.router',
    // - NgDialog
    'ngDialog',
    // -Translate
    'pascalprecht.translate'
]);

/**
 * Fix mdl animate in component.
 * @author: angular-material-design-lite
 */
app.directive('mdlUpgrade', function($timeout) {    
    return {
        restrict: 'A',
        compile: function() {
        return {
            post: function postLink(scope, element) {
            $timeout(function() {componentHandler.upgradeAllRegistered();}, 0);
            }
        };
        },
    };
});