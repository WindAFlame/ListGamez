/*

 */
app.directive('cardOff', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      icon: '@',
      action: '='
    },
    templateUrl: 'app/views/shared/directives/cardOff.html'
  };
});