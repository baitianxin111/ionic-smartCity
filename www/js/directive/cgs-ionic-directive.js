/**
 * Created by suc on 2017/9/21.
 */
// 设置月的样式
(function () {
  var style = document.createElement('style');
  style.style  = "text/css";
  /* 设置日历表格样式 */
  style.innerHTML += ".calendar-table {width: 100%;border-collapse: collapse;text-align: center;height:100%;}";
  style.innerHTML += ".calendar-table th{background-color:#fff;}";
  /* 表格行高 */
  style.innerHTML += ".calendar-table tr {height: 30px;line-height: 30px;}";
  style.innerHTML += ".calendar-table td {vertical-align:middle;border-left: 3px solid #ffffff;border-right: 3px solid #ffffff;position:relative;}";
  style.innerHTML += ".calendar-table td p {text-indent:0px;margin: 0 auto;display:block;border-radius:13px;height:26px;width:26px;line-height:25px;text-align:center;}";
  style.innerHTML += ".calendar-table td span {display:block;border-radius:2px;height:4px;width:4px;margin:0 auto;margin-top:3px;position:absolute;top:2px;right:2px;}";
  /* 当前天 颜色特殊显示 */
  style.innerHTML += ".calendar-table td.currentDay p{}";
  style.innerHTML+=".calendar-table td.active.yc p{background-color:#F46C7E;color:#fff}";
  style.innerHTML+=".calendar-table td.active.zc p{background-color:#3FA7FB;color:#fff}";
  style.innerHTML+=".calendar-table td.active p{background-color:#33cd5f;color:#fff}";
  /* 本月 文字颜色 */
  style.innerHTML += ".currentMonth {color: #222;}";

  /* 其他月颜色 */
  style.innerHTML += ".calendar-table td.otherMonth p,.calendar-table td.otherMonth span {color:#aaa;}";

  style.innerHTML += ".yc span{background-color:#F46C7E;}";
  style.innerHTML += ".zc span{background-color:#3FA7FB;}";
  angular.element(document.getElementsByTagName('head')[0]).prepend(style);
})();
//注入服务
angular.module("cgs.ionic.directive", [])
  .service("dateObj", function () {
    return {
      _date: new Date(),
      getDate: function () {
        return this._date;
      },
      setDate: function (date) {
        this._date = date;
        return this.getDays();
      },
      toPrevMonth: function () {
        date = this.getDate();
        return this.setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()));
      },
      toNextMonth: function () {
        date = this.getDate();
        return this.setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()));
      },
      getDateStr: function (date) {
        var _year = date.getFullYear();
        var _month = date.getMonth() + 1;    // 月从0开始计数
        var _d = date.getDate();

        _month = (_month > 9) ? ("" + _month) : ("0" + _month);
        _d = (_d > 9) ? ("" + _d) : ("0" + _d);
        return _year + _month + _d;
      },
      getDays: function () {
        var _year = this.getDate().getFullYear();
        var _month = this.getDate().getMonth() + 1;
        var _dateStr = this.getDateStr(this.getDate());
        // 设置表格中的日期数据
        var days = [[], [], [], [], [], []];
        var _firstDay = new Date(_year, _month - 1, 1);  // 当前月第一天
        for (var i = 0; i < 42; i++) {
          var _thisDay = new Date(_year, _month - 1, i + 1 - _firstDay.getDay());

          var _thisDayStr = this.getDateStr(_thisDay);
          var _className="";
          var _selected=false;
          if (_thisDayStr == this.getDateStr(new Date())) {    // 当前天
            _className = 'currentDay';
          } else if (_thisDayStr.substr(0, 6) == this.getDateStr(_firstDay).substr(0, 6)) {
            _className = 'currentMonth';  // 当前月
          } else {    // 其他月
            _className = 'otherMonth';
          }
          if(_thisDayStr==_dateStr&&_className!='otherMonth'){
            _selected=true
          }
          else
          {
            _selected=false;
          }
          var j = Math.floor(i / 7);
          days[j].push({day: _thisDay.getDate(), date: _thisDay, className: _className,selected:_selected})
        }
        return days;
      }
    }
  })
  .directive("cgsCalendar", function ($compile, dateObj, $document, $window, $filter) {
    return {
      require: '?ngModel',
      restrict: 'A',
      scope: {
        month: "=",
        selectDay: "="
      },
      template: '<div class="calendar-body-box"> ' +
      '<table class="calendar-table">' +
      '<tr> <th>日</th> <th>一</th> <th>二</th> <th>三</th> <th>四</th> <th>五</th> <th>六</th> </tr> ' +
      '<tr ng-repeat="week in month">' +
      '<td ng-repeat="day in week" ng-class="{true:\'active\'}[day.selected]" class="{{day.className}}" ng-click="selectDay(day)">' +
      '<p>{{day.day}}</p><span></span>' +
      '</td> ' +
      '</tr> ' +
      '</table> ' +
      '</div>',
      link: function (scope, element, attrs, controller, ngModel) {
        if (typeof scope.selectDay !== "function") {
          scope.selectDay = function (day) {
            console.log(day)
          }
        }
      },
      controller: function ($scope, $window, $document, dateObj) {

      }
    }
  })
  // .directive("cgsCalendar",function ($compile,dateObj,$document,$window,$filter) {
  //   return {
  //     require : '?ngModel',
  //     restrict :"A",
  //     scope : {
  //       month : "=",
  //       selectDay :"="
  //     },
  //     template :  '<div class="calendar-body-box">'+
  //     '<table class="calendar-table">'+
  //     '<tr> <tr>日</tr> <tr>一</tr> <tr>二</tr> <tr>三</tr> <tr>四</tr> <tr>五</tr> <tr>六</tr></tr>'+
  //     '<tr ng-repeat="week in month">'+
  //     '<td ng-repeat="day in week" ng-class="{true : \'active\'}[day.selected]" class="{{day.className}}" ng-click="selectDay(day)">'+
  //     '<p>{{day.day}}</p><span></span>' +
  //   '</td>'+
  //   '</tr>'+
  //   '</table>'+
  //  ' </div>' ,
  //     link : function (scope,element,attrs,controller,ngModel) {
  //       if(typeof  scope.selecDay !== "function"){
  //         scope.selecDay = function (day) {
  //           console.log(day);
  //         }
  //
  //       }
  //     },
  //     controller: function ($scope,$window,$document,dateObj) {
  //
  //     }
  //
  //   }
  //
  // })
  //
