/// <reference path="../../types/types.ts"/>

var recipe = angular.module("recipes.details", []);


class RecipeDetailsController implements recipes.IDetailsController {
  static $inject = [
    "$scope",
    "$rootScope"
  ];

  recipe = {
    name: "Shaved asparagus pizza",
    subtitle: "Spring is coming",
    description: "Topped with a tangle of thin asparagus shavings and dollops of creamy ricotta cheese.",
    picture: "http://placehold.it/676x350",
    cookingTime: 15,
    preparationTime: 15,
    tags: ["Pizza", "Vegetarian", "Italian"],
    numberServings: 4,
    ingredients: [
      {
        name: "asparagus",
        quantity: "6"
      }, {
        name: "olive oil",
        quantity: "2 tbsp"
      }, {
        name: "pizza dough",
        quantity: "1 lb"
      }
    ],
    steps: [
      {
        description: "Prepare your stuff"
      }, {
        description: "Cook it",
        picture: "http://placehold.it/150x80"
      }, {
        description: "Enjoy"
      }
    ],
    suggestions: [
      {
        name: "Brownies",
        picture: "http://placehold.it/320x180"
      }, {
        name: "Pizza",
        picture: "http://placehold.it/320x180"
      }
    ]
  };

  constructor(private $scope: app.IScope, private $rootScope: app.IRootScope) {
    $scope.vm = this;

    $rootScope.pageTitle = "gibberish";
  }
}


recipe.controller("RecipeDetailsController", RecipeDetailsController);
