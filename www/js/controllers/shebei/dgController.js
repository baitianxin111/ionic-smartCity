/**
 * Created by suc on 2017/9/25.
 */
define(['app'],function (app) {
  app.controller('dgCtrl',function ($scope,$state,$stateParams,$ionicViewSwitcher,$ionicPopup,$timeout) {
    $scope.params = $stateParams ;
    $scope.model={
      sewen:0,
      liangdu:0,
    }
  //  返回键
    $scope.goBack = function () {
      $state.go('index.allSb',{type :'灯光'});
      $ionicViewSwitcher.nextDirection('back');
    }
  //  初始化
    $scope.lut = null ;
    $scope.swt = null ;

    $scope.ld = function () {
      if($scope.lut !== null){
        $timeout.cancel($scope.lut);
        $scope.lut = null ;
      }
      $scope.lut = $timeout(function () {
        console.log(1);
      },500)
    }
    $scope.sw = function () {
      if($scope.swt !== null){
        $timeout.cancel($scope.swt);
        $scope.swt = null ;
      }
      $scope.swt = $timeout(function () {
        console.log(1);
      },500)
    }
  //  弹出框确认触发一个按钮点击，或一些其他目标一个精心制作的自定义弹窗
    var template=
      "<div style='padding:5px;'>" +
      "<button class='btn-ds' style='text-align: center' ng-class='{true:\"active\"}[ds.type==\"k\"]'>开</button>" +
      "<button class='btn-ds'  style='text-align: center' ng-class='{true:\"active\"}[ds.type==\"g\"]'>关</button>" +
      "</div>" +
      "<div class='row ds' style='padding: 0;'>" +
      "<div class='col' ><input ng-model='ds.h' ng-change='ds.watch()' type='number' min='0' max='24'></div>" +
      "<div class='col' ><input ng-model='ds.m' ng-change='ds.watch()' type='number' min='0' max='60'></div>" +
      "<div class='col' ><input ng-model='ds.s' ng-change='ds.watch()' type='number' min='0' max='60'></div>" +
      "</div>" +
      "<div class='assertive' ng-show='ds.error==false'><div style='padding: 5px;'>格式不正确</div></div>";
    $scope.timeout = function () {
      $scope.ds = {
        h : 0,
        m : 0,
        s : 0,
        type : 'g'
      }
    }
    // $scope.ds.watch=function(){
    //   if(helper.isEmpty($scope.ds.h)||helper.isEmpty($scope.ds.m)||helper.isEmpty($scope.ds.s))
    //   {
    //     $scope.ds.error=false;
    //   }
    //   else
    //   {
    //     $scope.ds.error=true;
    //   }
    // };
      var myPopup = $ionicPopup.show({
        template: template,
        title: '定时',
        scope: $scope,
        buttons: [
          {
            text: '取消',
            type: 'button-default',
            onTap: function(e) {
               return false ;
            }
          }, {
            text: '确定',
            type: 'button-default',
            onTap: function(e) {
              if($scope.ds.h == undefined && $scope.ds.m == undefined && $scope.ds.s == undefined){
                    e.preventDefault();
              }else{
                return true
              }
            }
          },

        ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      // $timeout(function() {
      //   myPopup.close(); //由于某种原因3秒后关闭弹出
      // }, 3000);
  })

})
