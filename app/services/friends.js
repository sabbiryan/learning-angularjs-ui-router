angular
    .module('app')
    .factory('Friends', [
        '$http',
        function($http) {
            return {
                get: function() {


                    //return [
                    //    {
                    //        "age": 30,
                    //        "isSpecial": true,
                    //        "name": "Sabbir",
                    //        "year": "2015"
                    //    },
                    //    {
                    //        "age": 26,
                    //        "isSpecial": true,
                    //        "name": "Don't know the name yet",
                    //        "year": "2015"
                    //    },
                    //    {
                    //        "age": 26,
                    //        "isSpecial": false,
                    //        "name": "Laura",
                    //        "year": "2015"
                    //    }
                    //];

                    return $http.get('api/friends.json').then(function(response) {
                        return response.data;
                    });

                }
            };
        }
    ]);