JavaScript is Prototypical Langauge rather than Object Oriented Language.
##Ajax
POST
```javascript
$("#promotion_code").on('change keypress paste focus textInput input',function(){
   var code = document.getElementById("promotion_code").value;
   $.ajax({
       type: "POST",
       url: "{% url 'product_app.check_out_views.check_promotion_code' %}",
       data: {"code": code}
   })
      .done(function(data) {
          document.getElementById("promo_code_test").innerHTML = data;
      });
});
```

GET would be similar

##Import
Import a JavaScript file in another JavaScript file
The jQuery library provides loading functionality in one line

```javascript
$.getScript("my_lovely_script.js", function(){
   alert("Script loaded and executed.");
});
```

##Jsonp
To avoid CORS, inject JavaScript into html and request json rather than requesting json directly.
Use `&callback=JSON_CALLBACK` to treat `$http.jsonp()` as `$http.json()`
```javascript
$http.jsonp(INST_API_URL+...+
    "&callback=JSON_CALLBACK").success(function(data) {
        var geoid = data;
        recentMedia(geoid, Math.floor(query.time/1000), query.hour, flag);  // UNIX stamp
    });
```

##Promises
Each async call returns a promise, which can be used as synchronization of code.
A single promise
```javascript
function () {
    //create a deferred object using Angular's $q service
    var deferred = $q.defer();
    var promise = oauthService.get('/1.1/statuses/home_timeline.json').done(function(data) {
        //when the data is retrieved resolved the deferred object
        deferred.resolve(data)
    });
    //return the promise of the deferred object
    return deferred.promise;
}
```

Multiple promises
```javascript
function recentMedia(geoid, time, hour, flag) {
    var promises = [];
    for(var i=0; i<...; i++) {
        promises.push($http.json(...).success(function (data) {
           ...
        }));
    }
    $q.all(promises).then(function() {
        ...
    });
}
```

##Clean an array
Prefer `array.length = 0` over `array = [];`