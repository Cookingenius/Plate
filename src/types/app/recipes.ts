/// <reference path="../libs/angular.d.ts"/>
/// <reference path="../libs/restangular.d.ts"/>


/// <reference path="../api/recipe.ts"/>

declare module recipes {
  interface IDetailsController {
    recipe : api.IRecipe;
  }

  interface IRecipeService {
    rest: restangular.IService;

    getById(number): restangular.IPromise<api.IRecipe>;
  }

}
