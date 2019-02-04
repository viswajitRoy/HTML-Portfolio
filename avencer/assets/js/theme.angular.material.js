angular
  .module('avencer',['ngMaterial'])
  .controller('avencerCtrl', function($scope) {
    $scope.showHints = true;

    $scope.user = {
      name: "",
      social: "123456789",
      phone: "N/A"
    };
})

