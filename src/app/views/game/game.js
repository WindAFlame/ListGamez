/**
 * State 'game'
 * - Load all games from json file.
 */
const gameState = {
    parent: 'layout',
    url: '/game',
    resolve: {
        games: function(sessionService){
            return sessionService.getJsonData().games;
        }
    },
    abstract: true,
    authenticate: true
};