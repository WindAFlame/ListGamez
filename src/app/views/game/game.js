/**
 * State 'game'
 * - Load all games from json file.
 */
const gameState = {
    parent: 'layout',
    url: '/game',
    resolve: {
        games: function($http){
            return $http({
                method: 'GET',
                url:'assets/media/data.json'
            })
            .then((res) => {
                console.log('Games data loaded !');
                return res.data;
            })
            .catch((err) => {
                alert('Cannot get json file !');
                return null;
            });
        }
    },
    abstract: true
};