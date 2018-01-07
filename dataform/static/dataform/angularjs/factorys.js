// factory
myapp.factory('myApi', myApi)
function myApi($http){
    var r = {}
    r.multiply = function(x, y){
        return x * y
    }

    return r
}