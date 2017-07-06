/*

 */
app.directive('gameCard', function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      ngData: '='
    },
    templateUrl: 'app/views/shared/gameCard.html'
  };
});