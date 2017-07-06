/*

 */
app.config(function ($translateProvider) {
    $translateProvider.translations('en', textEN);
    $translateProvider.translations('fr', textFR);
    $translateProvider.preferredLanguage('en');
});