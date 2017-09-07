/*

*/
app.component('layoutHeader',{
    bindings: null,
    controller: function(sessionService) {
        this.$onInit = () => {
            this.websiteTitle = () => {
                return sessionService.getJsonData().website.title;
            };
        };
    },
    templateUrl: 'app/views/layout/header/header.html',
});