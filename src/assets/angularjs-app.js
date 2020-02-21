const appName = 'myApp';
const ang = window.angular;

const myApp = ang.module(appName, []);

myApp.controller('HomeController', [
 '$scope',
 function($scope) {
   $scope.loaded = true;

   $scope.toggle = () => {
     $scope.loaded = !$scope.loaded;
   };
 }
]);

myApp.directive('about', function() {
  return {
    template: 'about',
    controller: function() {
      console.log('AngularJS about');
    }
  }
});

myApp.directive('home', function() {
  return {
    template: `
      <div ng-controller="HomeController">
        <button ng-click="toggle()">Toggle</button>

        <div ng-if="loaded">
          <home-element></home-element>
          <about></about>
        </div>
    `
  }
});
