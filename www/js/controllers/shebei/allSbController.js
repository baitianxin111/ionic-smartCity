define(['app'], function (app) {
  app
    .controller("allSbCtrl",
      function ($scope, $rootScope,$state,
                $timeout, $filter,$ionicViewSwitcher,$ionicPlatform,$stateParams) {
        // $rootScope.appPage.name='全部设备';
        // $rootScope.appPage.state='shebei';

        $scope.goBack=function(){
          $state.go("index.shebei");
          $ionicViewSwitcher.nextDirection("back")
        }
        $ionicPlatform.registerBackButtonAction(function(){
          $scope.goBack();
        },999)

        $scope.model={
          type:$stateParams.type
        }
        $scope.leftMenu=[
          {
            name:"一层",
            selected:false,
            children:[
              {name:"会议室1"},
              {name:"会客室"},
              {name:"大厅"}
            ]
          },
          {
            name:"二层",
            selected:false,
            children:[
              {name:"会议室2"},
              {name:"会客室2"},
              {name:"大厅2"}
            ]
          },
        ];
        $scope.rightList=[
          {name:"灯光1"},
          {name:"灯光2"},
        ];

        $scope.changeType=function(type){
          $scope.model.type=type;
          if(type=='窗帘')
          {
            $scope.rightList=[
              {name:"窗帘1"},
              {name:"窗帘2"},
            ];
          }
          else if(type=='空调')
          {
            $scope.rightList=[
              {name:"空调1"},
              {name:"空调2"},
            ];
          }
          else if(type=='灯光')
          {
            $scope.rightList=[
              {name:"灯光1"},
              {name:"灯光2"},
            ];
          }
        }
        $scope.clearTop=function(){
          for(var i=0;i<$scope.leftMenu.length;i++)
          {
            $scope.leftMenu[i].selected=false;
          }
        };
        $scope.clearChildren=function(){
          for(var i=0;i<$scope.leftMenu.length;i++)
          {
            for(var j=0;j<$scope.leftMenu[i].children.length;j++)
            {
              $scope.leftMenu[i].children[j].selected=false;
            }
          }
        };
        $scope.clearAll=function(){
          for(var i=0;i<$scope.leftMenu.length;i++)
          {
            $scope.leftMenu[i].selected=false;
            for(var j=0;j<$scope.leftMenu[i].children.length;j++)
            {
              $scope.leftMenu[i].children[j].selected=false;
            }
          }
        }
        $scope.showTop=function(item){
          //当展开左侧菜单是默认选中子菜单第一项
          // 可以根据需求进行调整
          $scope.clearChildren();
          if(item.selected==true)
          {
            item.selected=false;
          }
          // else
          // {
          //   item.selected=true;
          //   if(helper.isEmpty(item.children))
          //   {
          //     $scope.showCom(item.children[0]);
          //   }
          // }
        }
        $scope.showCom=function(i){
          $scope.clearChildren()
          i.selected=true;
          //从后台获取该场所的门
        };
        $scope.showTop($scope.leftMenu[0]);

        $scope.openDateil=function(item){
          if($scope.model.type=='窗帘')
          {
            $state.go('index.cl',{id:item.id,name:item.name});
          }
          else if($scope.model.type=='灯光')
          {
            $state.go('index.dg',{id:item.id,name:item.name});
          }
          else if($scope.model.type=='空调')
          {
            $state.go('index.kt',{id:item.id,name:item.name});
          }
        }
      })
});
