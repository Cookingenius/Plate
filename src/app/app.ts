/// <reference path="../types/types.ts"/>

var modules = [
  "templates",

  "Plate.recipes",

  "ui.router.state"
];

var appModule = angular.module("Plate", modules);

var appConfig = function($urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise("/recipes/sushi");
};

appConfig.$inject = ["$urlRouterProvider"];
appModule.config(appConfig);


var appController = function($scope: ng.IScope, $rootScope: app.IRootScope) {
  $scope.$on("$stateChangeSuccess", function(event, toState) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle;
    }
  });
};

appController.$inject = ["$scope", "$rootScope"];
appModule.controller(appController);
