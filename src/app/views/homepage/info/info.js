/**
 * 
 */
app.component('homeInfo',{
    bindings: null,
    controller:  function(sessionService) {
        this.$onInit = () => {
            this.title = sessionService.getJsonData().homepage.title;
            this.message = sessionService.getJsonData().homepage.message;
        };
    },
    templateUrl: 'app/views/homepage/info/info.html'
});