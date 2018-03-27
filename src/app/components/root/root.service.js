'use strict';

const appModule = angular.module('appModule');

appModule.service('rootService', function () {
    this.user = {name: 'Messi'};

    this.getUser = function () {
        return this.user;
    }
});
