angular.module('confusionApp')
    .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
        $scope.dish = menuFactory.getDish(3);
        $scope.dishes = menuFactory.getDishes();

    }])
    .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
        var dish = menuFactory.getDish(parseInt($stateParams.id, 10));
        $scope.dish = dish;
    }])