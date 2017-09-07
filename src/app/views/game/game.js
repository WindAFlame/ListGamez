/**
 * State 'game'
 * - Load all games from json file.
 */
const gameState = {
    url: '/game',
    resolve: {
        games: function(sessionService){
            return sessionService.getJsonData().games;
        }
    },
    abstract: true,
    authenticate: true
};