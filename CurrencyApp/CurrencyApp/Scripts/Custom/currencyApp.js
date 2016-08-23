﻿var currencyApp = angular.module('currencyApp', []);

currencyApp.controller('currencyController', function ($scope, $http) {
    $scope.hideExchangeRates = true;
    $scope.GetExchangeRates = function () {
        if ($scope.exchangeRatesForm.$valid) {
            $http.get("GetExchangeRateDifferences", { params: { date: $scope.date } }).then(function (response) {
                $scope.result = response.data;
                $scope.hideExchangeRates = false;
            });
        } else {
            $scope.exchangeRatesForm.dateFilter.$setDirty(true);
        }
    }
});

currencyApp.controller('currencyControllerPlusPlus', function ($scope, $http) {
    $scope.hideExchangeRates = true;
    $scope.GetExchangeRates = function () {
        console.log($scope.date);
        if ($scope.exchangeRatesForm.$valid) {
            $http.get("GetExchangeRateDifferences", { params: { date: $scope.date } }).then(function (response) {
                $scope.result = response.data;
                $scope.hideExchangeRates = false;
            });
        } else {
            $scope.exchangeRatesForm.dateFilter.$setDirty(true);
        }
    }
});