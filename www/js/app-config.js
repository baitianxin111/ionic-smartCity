/**
 * Created by suc on 2017/9/20.
 */
define(['app'],function (app) {
  app.config(['ionicConfigProvider','sceDelegateProvider'],function (ionicConfigProvider,sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://192.168.137.1:8080/**'
    ]);
    $ionicConfigProvider.views.transition('android');
    $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.views.forwardCache(false);
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.templates.maxPrefetch(5);
    $ionicConfigProvider.form.checkbox('square');
    $ionicConfigProvider.scrolling.jsScrolling(true);
    $ionicConfigProvider.form.toggle('small');
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back');
  })
    .run(function ($ionicPlatform,$ionicPopup,$timeout,$interval,$rootScope,positionService) {
      $ionicPlatform.ready(function () {
        if(window.cordova && window.cordova.cordova.plugins.Keyboard){
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if(window.StatusBar){
            StatusBar.styleDefault();
        }
        $rootScope.exitPopup = {
          isShow :false,
          time :0
        }
        $ionicPlatform.registerBackButtonAction(function (e) {
          $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
              title: '<strong>确定要退出吗？</strong>',
              template: '你确定要退出吗？?',
              okText :"确定",
              cancleText :"取消"
            });
            $rootScope.exitPopup.isShow = true;
            confirmPopup.then(function(res) {
              if(res) {
                ionic.Platform.exitApp();
                console.log('You are sure');
              } else {
                $rootScope.exitPopup.isShow = false;
              }
            });
          };
          if(!$rootScope.exitPopup.isShow){
            showConfirm();
          }
        },999);
        function onSuccess(position) {
          positionService.setPosition(position);
        }
        function onError() {
          positionService.setError(error);

        }
        window.shake = false ;
        function suc (monitor) {
          if(monitor.x>15 || monitor.x<-15||monitor.y>15 || monitor.y<-15){
            if(!window.shake)
            window.shake = true ;
            $timeout(function () {
              window.shake = false;
            },3000)
          }
        }

      })

    })
    .config(function(){

    })
    .animate('ui-fade',function () {
      return{
        enter: function (element,done) {
          element.css({
            opacity :1
          });
          element.animate({
            opacity:1
          },500,done)
        },
        leave: function (element,done) {
          element.css({
            opacity :0
          });
          element.animate({
            opacity :0
          },500,done)
        }
      }
    })
    .constant( '$ionicLoadingConfig',{
      template:'<ion-spinner></ion-spinner>',
      content :"Loading",
      animation:"fade-in",
      showBackdrop:true,
      showDelay: 0,
      duration: 1000
    })
//  设置一些请求参数的设置及跨域问题
    .config(function($httpProvider){
      if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
      }
      // Enables Request.IsAjaxRequest() in ASP.NET MVC
      $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
      // Disable IE ajax request caching
      $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
      $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
      $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
      // cors跨域
      $httpProvider.defaults.useXDomain = true;

      $httpProvider.defaults.withCredentials = true;

      $httpProvider.interceptors.push(function ($q, $window,$cookies) {
        return {
          // optional method
          'request': function (config) {
            // do something on success
            return config;
          },
          // optional method
          'requestError': function (rejection) {
            // do something on error
            return $q.reject(rejection);
          },
          // optional method
          'response': function (response) {
            // do something on success
            return response;
          },
          // optional method
          'responseError': function (rejection) {
            // do something on error
            if (rejection.status === 401) {
              // return responseOrNewPromise
              console.log('401');
            }
            return $q.reject(rejection);
          }
        };
      })
    })

})
