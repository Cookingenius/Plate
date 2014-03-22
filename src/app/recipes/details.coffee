modules = [
  'ui.router.state',
]

recipeDetails = angular.module 'recipes.details', modules


# Displays a recipe page, with pictures, ingredients, steps etc
class RecipeDetailsCtrl
  @$inject = ['$scope', '$stateParams', '$rootScope']

  constructor: (@scope, @stateParams, @rootScope) ->
    @rootScope.pageTitle = @stateParams.slug

    @scope.recipe =
      name: 'Sushi'
      tags: ['Japanese', 'Fish', 'Rice']
      cookingTime: 150
      prepTime: 150
      difficulty: 'Newbie'
      picture: 'http://www.taste.com.au/images/recipes/sfi/2006/11/14550_l.jpg'
      ingredients: [
        name: 'Rice'
        quantity: '100g'
       ,
        name: 'Fish'
        quantity: '100g'
      ]
      instructions: [
        text: 'Do something'
        picture: 'http://placekitten.com/200/200'
       ,
        text: 'Do something else'
        picture: 'http://placekitten.com/200/200'
      ]

recipeDetails.controller 'RecipeDetailsCtrl', RecipeDetailsCtrl
