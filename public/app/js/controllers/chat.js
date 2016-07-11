app.controller('ChatCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('app/data/chat-users.json').success(function(data) {
      $scope.users = data;
    });
  }]);
