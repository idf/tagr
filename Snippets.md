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

GET
```javascript
test
```


##Import
Import a JavaScript file in another JavaScript file
The jQuery library provides loading functionality in one line

```javascript
$.getScript("my_lovely_script.js", function(){
   alert("Script loaded and executed.");
});
```

##Notice
JavaScript is Prototypical Langauge rather than Object Oriented Language.