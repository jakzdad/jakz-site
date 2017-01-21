item.directive('item', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/item.html',
    replace: true,
    scope: {
      item: '='
    }
  }
});
