/// <reference path="../libs/angular.d.ts"/>

declare module app {

  interface IRootScope extends ng.IScope {
    pageTitle: string;
  }

  interface IScope extends ng.IScope {
    vm: any;
  }

}
