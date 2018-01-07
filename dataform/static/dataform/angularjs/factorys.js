// factory
myapp.factory('myApi', myApi)
function myApi($http){
/*
存放后台 api
*/
    var r = {}
    r.multiply = function(x, y){
        return x * y
    }

    r.topMenu = 'dataform/topmenu'
    return r
}