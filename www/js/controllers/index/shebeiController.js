define(['app'], function (app) {
  app
    .controller("shebeiCtrl",
      function ($scope, $rootScope, $interval,$state,
                $ionicLoading,$timeout,$ionicPopup,$ionicPopover,$ionicViewSwitcher) {
        // $rootScope.appPage.name='设备首页';
        // $rootScope.appPage.state='shebei';
        //每个区域默认有上班午休下班 三种模式
        //此外还可以自己新建模式
        $scope.model={
          position:{
            id:1,
            name:"会议室1"
          },
          pattern:{
            name:"上班",
            isOpen:false,
          },

        }
        $scope.topStyle={
          "width":"361px",
        }
        $scope.getMsList=function(){
          $scope.msList=[
            {name:'自定义A'},
            {name:'自定义B'},
            {name:'自定义C'},
          ]
          $scope.topStyle={
            "width":(386+$scope.msList.length*90)+"px",
          }
        }
        $scope.getMsList()
        $scope.changeMs=function(item,type){
          if(type=='自定义')
          {
            $scope.model.pattern=item;
          }
          else
          {
            $scope.model.pattern={
              name:type
            }
          }
        }
        $scope.chosePosition=function(item){
          $scope.model.position=item;
          $scope.popover.hide();
        }
        $scope.openModel=function(){
          //开启当前模式
          $ionicLoading.show()

          $timeout(function(){
            $ionicLoading.hide()
          },1000)
          console.log($scope.model)
        }
        $scope.positionList=[
          {name:'会议室1',id:1},
          {name:'会议室2',id:2},
          {name:'会议室3',id:3},
          {name:'会议室4',id:4},
          {name:'会议室5',id:5},
          {name:'会议室6',id:6},
          {name:'会议室7',id:7},
          {name:'会议室8',id:8},
        ]
        var template = '<ion-popover-view class="popover-view">' +
          '<ion-content>' +
          '<ion-checkbox ng-click="chosePosition(item)" ng-checked="model.position.id==item.id" ng-repeat="item in positionList track by $index" class="item">{{item.name}}</ion-checkbox>' +
          '</ion-content>' +
          '<ion-footer-bar><div class="button-xj" ng-click="newModel()">新建</div></ion-footer-bar>'+
          '</ion-popover-view>';
        $scope.popover = $ionicPopover.fromTemplate(template, {
          scope: $scope,
          animation:"ui-fade"
        });

        $scope.openPopover = function($event) {
          $scope.popover.show($event);
        };
        $scope.closePopover = function() {
          $scope.popover.hide();
        };
        // 清除浮动框
        $scope.$on('$destroy', function() {
          $scope.popover.remove();
        });

        $scope.changePosition=function($event){
          $scope.popover.show($event);
        }

        $scope.newModel=function(){
          $scope.popover.hide();
          $state.go('index.insert');
          $ionicViewSwitcher.nextDirection('forward')
        }
      })
});
