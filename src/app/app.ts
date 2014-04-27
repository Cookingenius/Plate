/// <reference path="../types/types.ts"/>

var modules = [
  "templates",

  "Plate.recipes",

  "ui.router.state",
  "restangular"
];

var cookingGenius = angular.module("Plate", modules);

var appConfig = function(
  $urlRouterProvider: ng.ui.IUrlRouterProvider,
  RestangularProvider: restangular.IProvider
  ) {
    $urlRouterProvider.otherwise("/recipes/1");
    RestangularProvider.setBaseUrl("http://localhost:8000");
    RestangularProvider.setRequestSuffix("/");
};

appConfig.$inject = ["$urlRouterProvider", "RestangularProvider"];
cookingGenius.config(appConfig);


var appController = function($scope: ng.IScope, $rootScope: app.IRootScope) {
  $scope.$on("$stateChangeSuccess", function(event, toState) {
    if (angular.isDefined(toState.data.pageTitle)) {
      $rootScope.pageTitle = toState.data.pageTitle;
    }
  });
};

appController.$inject = ["$scope", "$rootScope"];
cookingGenius.controller(appController);
