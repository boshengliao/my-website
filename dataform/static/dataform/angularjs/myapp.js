// 引入 myapp
var myapp = angular.module('myapp', ['ngRoute'])

// html files folder
var htmlFolder = 'static/dataform/html/'

// url partial
var myUrl = {
    home: '/home',
    spellName: '/spellName',
    multiply: '/multiply',
    menu: '/menu',
    new: '/new',
}

myapp.config(['$interpolateProvider', '$locationProvider', '$routeProvider',
    function config($interpolateProvider, $locationProvider, $routeProvider){
        // 因为 angular 的 {{ value }} 表示与 django 冲突
        // 所以换成 {[{ value }]}
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
        // // 设置路由前缀
        $locationProvider.hashPrefix('!');
        // 设置路由
        $routeProvider
            .when(myUrl.home, {
                templateUrl: htmlFolder + 'home.html',
                controller: 'homeCtrl',
            })
            .when(myUrl.spellName, {
                templateUrl: htmlFolder + 'spell_name.html',
                controller: 'spellNameCtrl',
            })
            .when(myUrl.multiply, {
                templateUrl: htmlFolder + 'multiply.html',
                controller: 'multiplyCtrl',
            })
            .when(myUrl.menu, {
                templateUrl: htmlFolder + 'menu.html',
                controller: 'menuCtrl',
            })
            .when(myUrl.menu + myUrl.new, {
                templateUrl: htmlFolder + 'menu_new.html',
                controller: 'menuNewCtrl',
            })
            .otherwise('/home')
    }
]);

// 将 console.log 绑定到 log
var log = console.log.bind(console)