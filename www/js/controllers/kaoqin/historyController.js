/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller('historyCtrl',function ($state,$scope,$rootScope,$timeout,dateObj,
                                         $ionicPopover,$interval,$filter,$ionicPlatform,$ionicViewSwitcher) {
  $scope.goBack = function () {
    $state.go('index.kaoqin');
    $ionicViewSwitcher.nextDirection('back');
  }
  $ionicPlatform.registerBackButtonAction(function () {
     $scope.goBack();
  },999)
    $scope.model = {};
    //初始化日历
    $scope.setModel = function (date) {
      $scope.model.date = new Date(date);
      $scope.model.year = $filter('date')(date,'yyyy');
      $scope.model.month = $filter('date')(date,'MM');
      $scope.model.day = $filter('date')(date,'dd');
      $scope.model.smonth = date.getMonth() + 1;
    }
    //获取到时间的数据
    $scope.setMonth = function () {
      var month = dateObj.setDate($scope.model.date)
      $scope.month = month ;
    }
    $scope.init = function () {
     $scope.setModel(new Date());
     $scope.setMonth();
    }
    $scope.init();
  //  前一页，后一页
    $scope.toNextMonth = function () {
      $scope.month = dateObj.toNextMonth();
      $scope.setModel(dateObj.getDate());
    }
    $scope.toPrevMonth = function () {
      $scope.month =  dateObj.toPrevMonth();
      $scope.setModel(dateObj.getDate());
    }
    //为选中的每一项添加样式d的颜色,日历中一共出现了6*7=42个
    $scope.selectDay = function (date) {
      for(var i=0;i<6;i++){
        for(var j=0;j<7;j++){
          $scope.month[i][j].selected = false ;
        }
      }
      if(date.className.indexOf("otherMonth") < 0){
        date.selected = true ;
        dateObj.setDate(new Date($scope.model.date.setDate(parseInt(date.day))));
      }
    }
    // 数据填充
    $scope.yearList = [
      {name :2017},
      {name :2018},
      {name :2019},
      {name :2020},
      {name :2021},
      {name :2022},
      {name :2023},
      {name :2024},
      {name :2025},
    ];
  $scope.monthList = [
    {name :1},
    {name :2},
    {name :3},
    {name :4},
    {name :5},
    {name :6},
    {name :7},
    {name :8},
    {name :9},
    {name :10},
    {name :11},
    {name :12},

  ];
  //添加弹出框
    var template = ' <ion-popover-view class="popover-view">'+
   ' <ion-content>'+
    '<ion-checkbox ng-repeat="item in yearList track by $index" class="item" ng-click="choseYear(item)"ng-checked="model.year == item.name">{{item.name}}年</ion-checkbox>'+
   ' </ion-content>'+
   ' </ion-popover-view>';
    $scope.popover = $ionicPopover.fromTemplate(template,{
      scope : $scope
    });
    var dayTemplate = '<ion-popover-view class="popover-view">' +
      '<ion-content>' +
      '<ion-checkbox ng-click="choseMonth(item)" ng-checked="model.smonth==item.name" ng-repeat="item in monthList track by $index" class="item">{{item.name}}月</ion-checkbox>' +
      '</ion-content>' +
      '</ion-popover-view>';
    $scope.mpopover = $ionicPopover.fromTemplate(dayTemplate, {
      scope: $scope,
      // animation:"ui-fade"
    });
    //显示月与年
    $scope.showMonth=function($event){
      $scope.mpopover.show($event);
    }
    $scope.showYear = function ($event) {
      $scope.popover.show($event);
    }
    //关闭
    $scope.choseYear = function (item) {
      //现获取到绑定的数据，将数据设为年份，
      var date = $scope.model.date ;
      date.setFullYear(parseInt(item.name));
      $scope.setModel(date);
       $scope.setMonth();
      $scope.popover.hide();
    }
    $scope.choseMonth = function (item) {
      var date = $scope.model.date ;
      date.setMonth(parseInt(item.name - 1));
      $scope.setModel(date);
      $scope.setMonth();
      $scope.mpopover.hide();
    }
    $scope.$on('$destory',function () {
      $scope.popover.remove();
      $scope.mpopover.remove();
    })
  });
})
