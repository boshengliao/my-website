// controllers
myapp.controller('homeCtrl', homeCtrl)
myapp.controller('spellNameCtrl', spellNameCtrl)
myapp.controller('multiplyCtrl', multiplyCtrl)
myapp.controller('menuCtrl', menuCtrl)
myapp.controller('menuNewCtrl', menuNewCtrl)


// controller funcs
function test($scope){
    log('aaa')
    $scope.txt = 'hello123'
    $scope.hi = 'hi...'
}

function homeCtrl($scope, $http){
    log('home')
    $scope.hi = 'hi...'

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

function menuCtrl($scope, $http, myApi){
    log('welcome to menuCtrl')
    var url = myApi.topMenu
    $http.get(url).then(function(response){
        log('response', response)
        t = response.data
        $scope.menus = t
    })
}
log('myUrl', myUrl)
function menuNewCtrl($scope, $http, $location,
                     myApi){
    log('welcome to menuNewCtrl')
    log('myUrl', myUrl)
    $scope.name = ''
    $scope.description = ''
    $scope.introduction = ''

    $scope.create = function(){
        name = $scope.name
        description = $scope.description
        introduction = $scope.introduction
        if (name === ''){
            alert('名字不能为空')
            return
        }
        t = {
            'name': name,
            'description': description,
            'introduction': introduction,
        }
        data = JSON.stringify(t)
        log('data', data)
        var url = myApi.topMenu
        var config = {
            'method': 'GET',
            'url': url,
            'data': data,
        }
        $http(config).then(function(response){
            log(response)
            log(myUrl)
            var url = myUrl.menu
            $location.path(url)
        }, function(response){
            alert('fail...')
        })
    }
}