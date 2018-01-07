// factory
myapp.factory('myApi', myApi)
function myApi($http){
    var r = {}
    r.multiply = function(x, y){
        return x * y
    }
    r.getMenus = function(){
        var url = 'dataform/topmenu'
        t = $http.get(url).then(function(response){
            return response.data
        })
        return t
    }
    return r
}