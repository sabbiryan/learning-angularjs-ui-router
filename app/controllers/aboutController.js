angular
    .module('app')
    .controller('aboutController', [
        '$scope',
        function($scope) {
            $scope.title = "About";
            $scope.items = ['Home', 'About', 'Contact', 'item4'];
        }
    ]);