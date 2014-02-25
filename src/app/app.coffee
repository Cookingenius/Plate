
modules = [
  'templates',

  'Plate.recipes',

  'ui.router.state'
]

appModule = angular.module 'Plate', modules


appConfig = ($stateProvider, $urlRouterProvider) ->
  $urlRouterProvider.otherwise '/recipes/sushi'

appConfig.$inject = ['$stateProvider', '$urlRouterProvider']
appModule.config appConfig


appController = ($scope, $rootScope) ->
  $scope.$on '$stateChangeSuccess', (event, toState) ->
    if angular.isDefined(toState.data.pageTitle)
      $rootScope.pageTitle = toState.data.pageTitle

appController.$inject = ['$scope', '$location']
appModule.controller 'AppCtrl', appController
