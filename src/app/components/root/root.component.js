'use strict';

var appModule = angular.module('appModule', []);
appModule.component('root', {
    template: '<h1>Home</h1>' +
    '<p>Hello, {{ $ctrl.user.name }} !</p>',
    controller: rootController
});

function rootController() {
    this.user = {name: 'Messi'};
}