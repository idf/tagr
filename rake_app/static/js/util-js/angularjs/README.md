##controllerAs View Syntax
Use the controllerAs syntax over the classic controller with $scope syntax.

$scope
```javascript
app.controller('GraphController', function($scope) {
    $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
});
```

```html
<div ng-controller="GraphController">
    <canvas id="radar" class="chart chart-radar" data="data" labels="labels"></canvas>
</div>
```

as
```html
<div ng-controller="GraphController as graphCtrl">
    <canvas id="radar" class="chart chart-radar" data="graphCtrl.data" labels="graphCtrl.labels"></canvas>
</div>
```

```javascript
app.controller('GraphController', function() {
    var vm = this;
    vm.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    vm.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];
});
```