// 引入 myapp
var myapp = angular.module('myapp', ['ngRoute'])

myapp.config(['$locationProvider', '$routeProvider',
    function config($interpolateProvider, $locationProvider, $routeProvider){
        // 因为 angular 的 {{ value }} 表示与 django 冲突
        // 所以换成 {[{ value }]}
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
        // 设置路由前缀
        $locationProvider.hashPrefix('!');
        // 设置路由
        $routeProvider
            .when('/home', {
                templateUrl: 'dataform/static/dataform/html/home.html',
                controller: homeCtrl,
            })

            .otherwise('/home');
        }
]);

// 将 console.log 绑定到 log
var log = console.log.bind(console)
