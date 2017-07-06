/*

 */
var app = angular.module('MainApp', [
    // Dependancies
    // - AngularJS
    'ngAria',
    'ngMessages',
    'ngSanitize',
    'ngAnimate',
    // - UI.Router
    'ui.router',
    // - NgDialog
    'ngDialog'
]);

app.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
        className: 'ngdialog-theme-default',
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
}]);