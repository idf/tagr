# Common JavaScript Utils() {
Common utilities for JavaScript.  
This is Noah's Ark for [Atwood's Law](http://blog.codinghorror.com/the-principle-of-least-power/): "any application that can be written in JavaScript, will eventually be written in JavaScript." :joy:


##Installations
###Common Utils for Everything
```html
<script type="text/javascript" src="/js/commons-util-js/DomUtils.js"></script>
<script type="text/javascript" src="/js/commons-util-js/PrimitiveExtensions.js"></script>
```
####Dependencies
* JQuery
* JQuery-UI

###Common Utils for AngularJS
```html
<script type="text/javascript" src="/js/commons-util-js/angularjs/filters.js"></script>
```
####Dependencies
* AngularJS

##Friends
* [JSHint](http://jshint.com/) for code quality.
* [Bower](http://bower.io/) for package management.

###JSHint
JetBrains configuration - opt for using config files `.jshintrc`.

##Best Practice for JS Folder Structure
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
* Prefer anonymous function to be one-line.

##CSS/JS Dependencies
Do not commit 3rd party/ventor CSS/JS. Use bower.json to update dependencies instead
Initialize bower
```bash
bower init
```
Update dependencies:
```bash
bower update
```

# };
