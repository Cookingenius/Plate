modules = [
  'recipes.details',

  'ui.router.state',
]

recipes = angular.module 'Plate.recipes', modules

recipesConfig = ($stateProvider) ->
  $stateProvider.state 'recipes',
    url: '/recipes'
    abstract: true
    template: '<ui-view/>' # Even abstract views need a template

  $stateProvider.state 'recipes.details',
    url: '/:slug'
    templateUrl: 'recipes/details.html'
    controller: 'RecipeDetailsCtrl'
    data:
      pageTitle: ''

recipesConfig.$inject = ['$stateProvider']
recipes.config recipesConfig