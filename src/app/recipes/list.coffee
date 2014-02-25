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


recipeDetails.controller 'RecipeDetailsCtrl', RecipeDetailsCtrl
