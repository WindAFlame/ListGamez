app.config(function($stateProvider) {
    var homeState = {
        name: 'home',
        url: '/',
        template: '<h1>homepage</h1>'
    }

    var listState = {
        name: 'list',
        url: '/list',
        template: 'html/view/list.htm'
    }

    var detailState = {
        name: 'detail',
        url: '/detail',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(listState);
    $stateProvider.state(detailState);
});