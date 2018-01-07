// controllers
myapp.controller('homeCtrl', homeCtrl)
myapp.controller('spellNameCtrl', spellNameCtrl)
myapp.controller('multiplyCtrl', multiplyCtrl)

// controller funcs
function test($scope){
    log('aaa')
    $scope.txt = 'hello123'
    $scope.hi = 'hi...'
}

function homeCtrl($scope, $http){
    log('home')
    $scope.hi = 'hi...'
    var url = 'dataform/topmenu'
    r = $http.get(url).then(function(response){
        log('response', response)
        t = response.data
        $scope.menus = t
        return t
    })
    log('r', r)
}

function spellNameCtrl($scope){
    log('welcome to spellNameCtrl')
    $scope.firstName = '小'
    $scope.lastName = '白'
}

function multiplyCtrl($scope, myApi){
    log('welcome to multiplyCtrl')    
    $scope.a = 2
    $scope.b = 3
    $scope.result = $scope.a * $scope.b
    $scope.getResult = function(){
        $scope.result = myApi.multiply($scope.a, $scope.b)
    }
    $scope.reset = function(){
        t = 0
        $scope.a = t
        $scope.b = t
        $scope.result = t
    }
}