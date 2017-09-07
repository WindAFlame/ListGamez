/*

*/
const gameDetailState = {
    parent: 'game',
    url: '/:id',
    resolve: {
        game: (games, $filter, $transition$) => {
            return $filter('filter')(games, {'id': $transition$.params().id})[0];
        }
    },
    onEnter: ($state, $transition$, games) => {
        const params = {
            id : Number.parseInt($transition$.params().id)
        };
        // Vérification que la page existe. 
        if ( isNaN(params.id) || ((params.id > 0) && (games.length < params.id))) {
            console.log('Redirection to game list.');
            $state.go('gameList');
        }
    },
    component: 'gameDetail',
    onExit: null,
    authenticate: true
};
/*

*/
app.component('gameDetail',{
    bindings: {
        game : '<'
    },
    controller: null,
    templateUrl: 'app/views/game/detail/gameDetail.html'
});