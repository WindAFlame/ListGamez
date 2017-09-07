/*

*/
const loginState = {
    parent: 'layout',
    url: '/login',
    resolve: null,
    onEnter: null,
    component: 'login',
    onExit: null,
};
/*

*/
app.component('login',{
    bindings: null,
    controller: function(fileReader, sessionService, $scope) {
        this.$onInit = () => {

            this.loadJsonFile = () => {
                sessionService.loadJsonFile($scope);
            };

            this.getJsonData = () => {
                return sessionService.getJsonData();
            };

        }
    },
    templateUrl: 'app/views/login/login.html'
});