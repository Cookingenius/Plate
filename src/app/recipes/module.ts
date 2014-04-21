/// <reference path="../../types/types.ts"/>

var modules = [
  "recipes.details",

  "ui.router.state"
];

var recipes = angular.module("Plate.recipes", modules);

var recipesConfig = function($stateProvider: ng.ui.IStateProvider) {

  $stateProvider.state("recipes", {
    url: "/recipes",
    abstract: true,
    template: "<ui-view/>"
  });

  $stateProvider.state("recipes.details", {
    url: "/:slug",
    templateUrl: "recipes/details.html",
    controller: "RecipeDetailsController",
    data: {
      pageTitle: ""
    }
  });

};

recipesConfig.$inject = ["$stateProvider"];
recipes.config(recipesConfig);
