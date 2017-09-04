/**
 * 
 */
app.config(function ($translateProvider) {
    $translateProvider.translations('en', textEN);
    //$translateProvider.translations('fr', textFR);
    $translateProvider.preferredLanguage('en');
});
/**
 * 
 * @param {*} lang 
 */
const getDict = function(lang){
    if (lang=='en'){
        return textEN;
    } else if (lang=='fr') {
        return textFR;
    }
};