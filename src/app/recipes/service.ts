/// <reference path="../../types/types.ts"/>

var modules = ["restangular"];
var module = angular.module("recipes.service", modules);

class RecipeService implements recipes.IRecipeService {
  static $inject = ["Restangular"];

  rest: restangular.IService;

  constructor(Restangular: restangular.IService)  {
    this.rest = Restangular;
  }

  getById(id: number): restangular.IPromise<api.IRecipe> {
    return this.rest.one("recipes", id).get();
  }

}

module.service("recipeService", RecipeService);
