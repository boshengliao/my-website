// controllers
myapp.controller('test', test)
myapp.controller('homeCtrl', homeCtrl)

// controller funcs
function test($scope){
    log('aaa')
    $scope.txt = 'hello123'
    $scope.hi = 'hi...'
}

myapp.factory('myApi', myApi)
function myApi($http){
    var r = {}
    r.multiply = function(x, y){
        return x * y
    }

    return r
}

function homeCtrl($scope, myApi){
    log('home')
    $scope.hi = 'hi...'
    $scope.a = 2
    $scope.b = 3
    $scope.result = $scope.a * $scope.b
    $scope.getResult = function(){
        $scope.result = myApi.multiply($scope.a, $scope.b)
    }
}