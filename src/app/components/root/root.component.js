'use strict';

const appModule = angular.module('appModule');

appModule.component('appRoot', {
    templateUrl: 'src/app/components/root/root.html',
    controller: rootController
});

function rootController() {
    this.user = {name: 'Messi'};
}