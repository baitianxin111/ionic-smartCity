/**
 * Created by suc on 2017/9/21.
 */
angular.module('positionService',[])
  .service('positionService',function () {
    return{
      _currentPosition :{status : false},
      _lastPosition :{},
      _positonError : {status : false,message : "GPS 信号搜索中"},
      _lowPosition : {status : false},
      getPosition  :function () {
        if(this._currentPosition.status){
          return this._currentPosition
        }else{
          if(this._lastPosition.hasOwnProperty('timestamp')){
            var _now = new Date().valueOf();
            var _last = new Date(this._lastPosition.timestamp).valueOf();
            if(_now - _last < 6000){
              //说明还在原地，没有前进
              return this._lastPosition;
            }
            else{
              return this._positonError ;
            }
          }else{
            return this._positonError ;
          }
        }
      },
      setLowPosition : function (position) {
        this._lowPosition = position ;
      },
      getLowPosition : function () {
        return this._lowPosition ;
      },
      setPosition : function (position) {
        //判断是否是第一次进入，是则获取当前位置，并表上类型，
        // 如果不是第一次进入，则将当前的位置赋值给上一次的位置，并表上类型
        if(this._currentPosition.status){
          this._lastPosition = this._currentPosition   ;
          this._lastPosition.type = "lastPosition";
        }
        this._currentPosition.status = true;
        this._currentPosition =  position;
        this._currentPosition.type = "currentPosition";
      },
      setError : function () {
        this._currentPosition = false;
        // this._lowPosition = false ;
        this._positonError = false;
        this._positonError = error ;

      }


    }
  })
