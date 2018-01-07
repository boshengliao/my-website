// 引入 myapp
var myapp = angular.module('myapp', ['ngRoute'])

// html files folder
var htmlFolder = 'static/dataform/html/'

// url partial
var home = '/home'
var spellName = '/spellName'
var multiply = '/multiply'
var menu = '/menu'
var _new = '/new'

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
            .when(home, {
                templateUrl: htmlFolder + 'home.html',
                controller: 'homeCtrl',
            })
            .when(spellName, {
                templateUrl: htmlFolder + 'spell_name.html',
                controller: 'spellNameCtrl',
            })
            .when(multiply, {
                templateUrl: htmlFolder + 'multiply.html',
                controller: 'multiplyCtrl',
            })
            .when(menu, {
                templateUrl: htmlFolder + 'menu.html',
                controller: 'muneCtrl',
            })
            .when(menu + _new, {
                templateUrl: htmlFolder + 'menu_new.html',
                controller: 'muneNewCtrl',
            })
            .otherwise('/home')
    }
]);

// 将 console.log 绑定到 log
var log = console.log.bind(console)