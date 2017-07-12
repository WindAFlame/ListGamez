/*

 */
app.controller('baseController',function($scope, $translate){
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
});