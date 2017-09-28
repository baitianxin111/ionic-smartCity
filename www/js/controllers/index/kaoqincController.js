/**
 * Created by suc on 2017/9/21.
 */
define(['app'],function (app) {
  app.controller('kaoqinCtrl',
    function ($scope,$state,$ionicViewSwitcher,$filter,$rootScope,$interval,positionService) {
  //  设定初始值
      $scope.nowTime = new Date();
      $scope.model = {
        accessWifi:["\"suc\"","\"suc-11\""],
        isInArea : false,
        isWork  : false,
        startTime : new Date($filter('date')(new Date(),'yyyy-MM-dd'))
      }
      //定时判断是否在wifi区域内
      $scope.timer = $interval(function () {
        $scope.nowTime = new Date();
        if(window.$$appConfig.appType == 'release'){
            window.WifiWizard.getCurrentSSID(function (data) {
              if($scope.model.accessWifi.indexOf(data) > 0){
                $scope.model.isInArea = true ;

              }
              else {
                $scope.model.isInArea = false ;
              }
            },function () {
              $scope.model.isInArea = false ;
            })
        }
      },999)
      if(window.$$appConfig.appType == 'relaese'){
        {
          window.WifiWizard.setWifiEnabled(true,function (data) {
            console.log(data);
          })
        }
      }
      //注入位置服务，进行定位上班打卡，服务的
      $scope.post = function ( ) {
        var p = positionService.getLowPosition()  ;
        if(p.status){
          console.log(p);
        }

      }
      // $scope.on('$destory',function () {
      //   $interval.cancel($scope,timer)
      // })

  })

})
