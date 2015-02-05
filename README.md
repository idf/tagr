# Commons Util Js() {
Common utilities for JavaScript

##Dependencies
* AngularJS
* JQuery
* JQuery-UI

##Friends
* [JSHint](http://jshint.com/) for code quality.
* [Bower](http://bower.io/) for package management.

###JSHint
JetBrains configuration - opt for using config files `.jshintrc`.

##Best Folder Structure
[ref](http://requirejs.org/docs/api.html)
```
www/
    index.html
    js/
        app/
            sub.js
        lib/
            jquery.js
            canvas.js
        app.js
        require.js
```

## Immediately Invoked Function Expression (IIFE)
```javascript
(function(){
  /* code */
}());

// And that's the way if some parameters shall be passed
(function(a, b){
  /* code */
})(arg1, arg2); //arg1 -> a; arg2 -> b
```
## Functions
* Prefer function delectation than anonymous function (function expression), because of facilitation of hoisting.
* Prefer anonymou function to be one-line. 

# };
