'use strict';

const appModule = angular.module('appModule');

appModule.component('appRoot', {
    templateUrl: '/app/components/root/root.html',
    controller: rootController
});

function rootController() {
    this.user = {name: 'Messi'};
}