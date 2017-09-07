/*

*/
const homepageState = {
        parent: 'layout',
        url: '/home',
        resolve: null,
        onEnter: null,
        component: 'homepage',
        onExit: null,
        authenticate: true
};
/*

*/
app.component('homepage',{
    bindings: null,
    controller: null,
    templateUrl: 'app/views/homepage/homepage.html'
});