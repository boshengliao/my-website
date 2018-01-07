// controllers
myapp.controller('test', test)

// controller funcs
function test($scope){
    log('aaa')
    $scope.txt = 'hello123'
    $scope.hi = 'hi...'
}

// function homeCtrl($scope){
//     log('home')
// }