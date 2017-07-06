/*

 */
app.controller('homepageController', function($scope, ngDialog){
    $scope.clickToOpen = {};
    // Function called by id in text.js (lang.homepage.card.id)
    $scope.clickToOpen[0] = function(){
        ngDialog.open(ngDialogConfiguration.nfoQuickToInstall);
    };
    $scope.clickToOpen[1] = function(){
        ngDialog.open(ngDialogConfiguration.nfoEasyToLaunch);
    };
    $scope.clickToOpen[2] = function(){
        ngDialog.open(ngDialogConfiguration.nfoPoweredByCommunity);
    };
});