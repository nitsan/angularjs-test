'use strict';

const appModule = angular.module('appModule');

appModule.component('appRoot', {
    templateUrl: '/app/components/root/root.html',
    controller: rootController
});

function rootController(rootService) {
    this.user;

    this.$onInit = function () {
        console.log('$onInit');
        this.user = rootService.getUser();
    }
}