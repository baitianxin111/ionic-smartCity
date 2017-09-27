/**
 * Created by suc on 2017/9/21.
 */
angular.module('positionService',[])
  .service('positionService',function () {
    return{
      _currentPosition :{},
      _lowPosition :{},
      _lowPositonerror : {},
      getPosition  :function () {},
      setPosition : function () {},


    }
  })
