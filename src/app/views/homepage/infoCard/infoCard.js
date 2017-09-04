/**
 * 
 */
app.component('homeInfoCard',{
    bindings: null,
    controller: function($translate, ngDialog){
        this.maxCardId = getDict($translate.use()).homepage.content.card.length;
        // -ngDialog for each cardOff
        this.clickToOpen = {};
        // Function called by id in text.js (lang.homepage.card.id)
        this.clickToOpen[0] = function(){
            ngDialog.open(ngDialogConfiguration.nfoQuickToInstall);
        };
        this.clickToOpen[1] = function(){
            ngDialog.open(ngDialogConfiguration.nfoEasyToLaunch);
        };
        this.clickToOpen[2] = function(){
            ngDialog.open(ngDialogConfiguration.nfoPoweredByCommunity);
        };
    },
    templateUrl: 'app/views/homepage/infoCard/infoCard.html'
});