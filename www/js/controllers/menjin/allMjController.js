define(['app'], function (app) {
  app
    .controller("allMjCtrl",
      function ($scope, $rootScope, $interval,$state,
                $timeout,$filter,$ionicViewSwitcher,$ionicPlatform) {
        // $rootScope.appPage.name='所有门禁';
        // $rootScope.appPage.state='menjin';

        $scope.goBack=function(){
          $state.go("index.menjin");
          $ionicViewSwitcher.nextDirection("back")
        }
        $ionicPlatform.registerBackButtonAction(function(){
          $scope.goBack();
        },999)
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
          {name:"门1"},
          {name:"门2"},
          {name:"门3"},
          {name:"门4"},
          {name:"门5"},
          {name:"门6"},
          {name:"门7"},
          {name:"门8"},
          {name:"门9"},
          {name:"门10"},
          {name:"门11"},
        ];
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
          else
          {
            item.selected=true;
            // if(helper.isEmpty(item.children))
            // {
            //   $scope.showCom(item.children[0]);
            // }
          }
        }
        $scope.showCom=function(i){
          $scope.clearChildren()
          i.selected=true;
          //从后台获取该场所的门
        };
        $scope.showTop($scope.leftMenu[0]);
      })
});
