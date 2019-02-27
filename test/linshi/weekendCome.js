! function () {
    var Userid = $("#Userid").val();
    var ID = $("#Hid").val();
    Vue.directive('move', {
        inserted: function (el) {
            el.addEventListener('touchstart', function (ev) {
                var touch = ev.touches[0];
                var disX = touch.clientX - el.offsetLeft;
                var disY = touch.clientY - el.offsetTop;
                var elPosition = {};

                function move(ev) {
                    var touchs = ev.touches[0];
                    var elLeft = touchs.clientX - disX;
                    var elTop = touchs.clientY - disY;

                    elPosition = {
                        x: elLeft,
                        y: elTop
                    };

                    el.style.left = elLeft + 'px';
                    el.style.top = elTop + 'px';
                    ev.preventDefault();
                }

                document.addEventListener('touchmove', move, {
                    passive: false
                });
                document.addEventListener('touchend', function end(ev) {

                    if (elPosition.x < document.documentElement.clientWidth / 2) {
                        el.style.left = 0;
                    } else {
                        el.style.left = document.documentElement.clientWidth - el.offsetWidth - 21 + 'px';
                    }
                    document.removeEventListener('touchmove', move, false);
                    document.removeEventListener('touchend', end, false);
                });
            });
        }
    });

  var vm = new Vue({
    el: "#weekend-come-detail",
    data: {
        spinShow:true,
        activeClass: 'info',
        datas: {},
        Weekworkpersonnel:[],
      processData: [],
      handleButton: true,
      comebackAdvise: "",
      showMask: false,
      showComebackPopup: false
    },
    watch: {
      showMask: function (newVal) {
        if (!newVal) {
          document.body.style.position = "static";
        }
      }
    },
    mounted: function () {
        this.getDetail();

    },
    methods: {
     tabSwitch:function(flag) {
        document.body.style.backgroundColor = "#eceef6";
        if (flag === "proc") {
          this.activeClass = "proc";
          document.body.style.backgroundColor = "#fff";
        } else {
          this.activeClass = "info";
        }
      },
     passHandle: function () { // 通过
         var _this = this;
        if (confirm("确认是否提交！")) {
            axios({
                method: 'POST',
                url: '../ashx/HolidayManag.ashx?Stage=11&Id=' + ID + '&Userid=' + Userid,
          }).then(function (response) { // 成功
              if (response.data == "成功")
              {
                  _this.$Message.success("提交成功！");
                  window.setTimeout("window.location = '../html/outwork.aspx'", 1000);
              }

          }).catch(function (result) {
            vm.$Message.error('提交失败！');
          });
        }
      },
      customDate: function (previous) {
          if (previous) {
              var date = new Date(previous);
              Y = date.getFullYear(),
              m = date.getMonth() + 1,
              d = date.getDate(),
              H = date.getHours(),
              i = date.getMinutes(),
              s = date.getSeconds();
              if (Y == 1900) {
                  return [];
              }
              if (m < 10) {
                  m = '0' + m;
              }
              if (d < 10) {
                  d = '0' + d;
              }
              if (H < 10) {
                  H = '0' + H;
              }
              if (i < 10) {
                  i = '0' + i;
              }
              if (s < 10) {
                  s = '0' + s;
              }
              var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
              //var t = Y + '-' + m + '-' + d;
              return t.split(/\s+/);
          } else {
              return [];
          }
      },
        //非工作日出勤审核页面初始化数据绑定
      getDetail: function () {
          var _this = this;
         // var ID = $("#Hid").val();
          $.ajax({
              type: "post",
              url: ("../ashx/HolidayManag.ashx?Stage=2&Id=" + ID),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (result) {
                  vm.datas = result.Table[0];
                  // getUserName(result.Table);
                  vm.spinShow = false;

              },
              error: function (result) {
                  vm.spinShow = false;


              }

          })
          //获取出勤人员信息
          $.ajax({
              type: "post",
              url: ("../ashx/HolidayManag.ashx?Stage=3&Id=" + ID),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (result) {
                  _this.Weekworkpersonnel = result.Table;
                  console.log(_this.Weekworkpersonnel);
                  
                  _this.spinShow = false;

              },
              error: function (result) {
                  _this.spinShow = false;


              }

          })
          //获取出勤人员信息
          $.ajax({
              type: "post",
              url: ("../ashx/HolidayManag.ashx?Stage=10&Id=" + ID),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function (result) {
                  _this.processData = result.Table;
                 

                  _this.spinShow = false;

              },
              error: function (result) {
                  _this.spinShow = false;


              }

          })
      },
      comebackHandle: function () { // 批退
        document.body.style.position = "fixed";
        this.showMask = true;
        this.showComebackPopup = true;
      },
      comedownHandle: function (flag) { // 退回, 拒绝
          var _this = this;
        if (!!!this.comebackAdvise) {
          vm.$Message.error('提交失败！请填写相关意见。');
          return;
        }
        if (confirm("确认是否提交！")) {
            var Description = $("#comebackAdvise").val();
            if (flag === '0') { // 退回
                axios({
                    method: 'POST',
                    url: '../ashx/HolidayManag.ashx?Stage=13&Id=' + ID + '&Userid=' + Userid + '&Description=' + Description,
                }).then(function (response) { // 成功
                    if (response.data == "成功") {
                        _this.$Message.success("提交成功！");
                        window.setTimeout("window.location = '../html/outwork.aspx'", 1000);
                    }

                }).catch(function (result) {
                    vm.$Message.error('提交失败！');
                });

          } else if (flag === '1') { // 拒绝
              axios({
                  method: 'POST',
                  url: '../ashx/HolidayManag.ashx?Stage=12&Id=' + ID + '&Userid=' + Userid + '&Description=' + Description,
              }).then(function (response) { // 成功
                  if (response.data == "成功") {
                      _this.$Message.success("提交成功！");
                      window.setTimeout("window.location = '../html/outwork.aspx'", 1000);
                  }

              }).catch(function (result) {
                  vm.$Message.error('提交失败！');
              });
          }
          axios({
            method: 'POST',
            url: '',
            data: {
              advise: this.comebackAdvise
            },
          }).then(function (response) {

          }).catch(function (result) {
            vm.$Message.error('提交失败！');
          });
        } else {
          this.showMask = false;
          this.showComebackPopup = false;
          this.comebackAdvise = '';
        }
      },
      clickMask: function () {
        this.showMask = false;
        this.showComebackPopup = false;
      }
    }
  })
}();
//时间格式转换为年月日 spf 2017-12-12 14:52:55
Vue.filter('time',
function (value) {
    var date = new Date(value);
    Y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    H = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();
    if (m < 10) {
        m = '0' + m;
    }
    if (d < 10) {
        d = '0' + d;
    }
    if (H < 10) {
        H = '0' + H;
    }
    if (i < 10) {
        i = '0' + i;
    }
    if (s < 10) {
        s = '0' + s;
    }
    // var t = Y+'-'+m+'-'+d+' '+H+':'+i+':'+s;
    var t = Y + '-' + m + '-' + d;
    return t;
});