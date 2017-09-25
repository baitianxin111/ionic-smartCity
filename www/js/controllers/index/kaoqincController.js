/**
 * Created by suc on 2017/9/21.
 */
define(['app'],function (app) {
  app.controller('kaoqinCtrl',
    function ($scope,$state,$ionicViewSwitcher,$filter,$rootScope,$interval) {
  //  设定初始值
      $scope.nowTime = new Date();
      $scope.model = {
          accessWifi:["\"suc\"","\"suc-11\""],
        isInArea : false,
        isWork  : false,
        startTime : new Date($filter('date')(new Date(),'yyyy-MM-dd'))
      }
      if(window.$$appConfig.appType == 'relaese'){
        {
          window.WifiWizard.setWifiEnabled(true,function (data) {
            console.log(data);

          })
        }

      }

  })

})
