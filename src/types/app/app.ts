/// <reference path="../libs/angular.d.ts"/>

module app {

  export interface IRootScope extends ng.IScope {
    pageTitle: string;
  }

  export interface IScope extends ng.IScope {
    vm: any;
  }

}
