/*

*/
const gameListState = {
    parent: 'game',
    url: '',
    resolve: null,
    onEnter: null,
    component: 'gameList',
    onExit: null,
};
/*

*/
app.component('gameList',{
    bindings: {
        games: '<'
    },
    controller: null,
    templateUrl: 'app/views/game/list/gameList.html'
});