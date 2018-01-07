// controllers
myapp.controller('homeCtrl', homeCtrl)
myapp.controller('spellNameCtrl', spellNameCtrl)
myapp.controller('multiplyCtrl', multiplyCtrl)
myapp.controller('menuCtrl', menuCtrl)
myapp.controller('menuNewCtrl', menuNewCtrl)
myapp.controller('menuRetriveCtrl', menuRetriveCtrl)


// controller funcs
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

function menuCtrl($scope, $http, myApi, $location){
    log('welcome to menuCtrl')
    var url = myApi.topMenu
    $http.get(url).then(function(response){
        t = response.data
        $scope.menus = t
    })

    $scope.retrive = function(id){
        log('id', id)
        var url = myUrl.menu + '/' + id
        log('url', url)
        $location.path(url)
    }
}

function menuNewCtrl($scope, $http, $location,
                     myApi){
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
            'method': 'POST',
            'url': url,
            'data': data,
        }
        $http(config).then(function(response){
            log(response)
            var url = myUrl.menu
            $location.path(url)
        }, function(response){
            alert('post fail...')
        })
    }
}

function menuRetriveCtrl($scope, $http, $routeParams, myApi){
    log('welcome to menuRetriveCtrl')
    t = $routeParams.id
    log('t', t)
}