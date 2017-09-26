/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller('historyCtrl',function ($state,$scope,$rootScope,$timeout,$ionicPopover,$interval,$filter,$ionicPlatform,$ionicViewSwitcher) {
  $scope.goBack = function () {
    $state.go('index.kaoqin');
    $ionicViewSwitcher.nextDirection('back');
  }
  $ionicPlatform.registerBackButtonAction(function () {
     $scope.goBack();
  },999)
  // 数据填充
    $scope.yearList = [
      {year :2018},
      {year :2019},
      {year :2020},
      {year :2021},
      {year :2022},
      {year :2023},
      {year :2024},
      {year :2025},
    ];
  $scope.monthList = [
    {month :1},
    {month :2},
    {month :3},
    {month :4},
    {month :5},
    {month :6},
    {month :7},
    {month :8},
    {month :9},
    {month :10},
    {month :11},
    {month :12},

  ];


  })
})
