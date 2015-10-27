angular
    .module('app')
    .controller('homeController', [
        '$scope', 'friends',
        function ($scope, friends) {

            $scope.title = "Home";
            $scope.friends = friends;

            $scope.items = ['Home', 'About', 'Contact', 'item4'];

            $scope.selectedValue = "item4";

            $scope.save = function() {
                alert(JSON.stringify($scope.friends));

                //$http.post('/api/friends', post);
            }
        }
    ]);