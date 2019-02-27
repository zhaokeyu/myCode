<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="version-safeTest-detail.aspx.cs" Inherits="MobileReport.Approve.html.version_safeTest_detail" %>

<!DOCTYPE html>
<html lang="en" xmlns:>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">
    <title>安全测试详情</title>
    <link rel="stylesheet" href="../style/mintUi.css">
    <link rel="stylesheet" href="../css/init.css">
    <link rel="stylesheet" href="../style/safeMoney_detail.css">
    <link rel="stylesheet" href="../style/version_safeTest_detail.css">
</head>
<body>
<div id="app" v-cloak>
        <Spin size="large" fix v-if="spinShow"></Spin>

    <input type="hidden"  id="Userid" runat="server"/>
    <input  type="hidden" id="hdPublic" runat="server"/>
    <input  type="hidden" id="Id" runat="server"/>
       <input id="hidWebPath" type="hidden" runat="server" />
    <div class="title">
        <div class="return" onclick="historyReturn()">
            <a href="javascript:void(0)"></a>
        </div>
        <div class="text">安全测试</div>
    </div>
    <%--tab-导航栏--%>
    <div class="tab_nav">
        <div :class="{active: tab===0}" @click="tab=0">
            <span class="text">信息</span>
            <span class="line"></span>
        </div>
        <div :class="{active: tab===1}" @click="tab=1">
            <span class="text">结果</span>
            <span class="line"></span>
        </div>
        <div :class="{active: tab===2}" @click="tab=2">
            <span class="text">流程</span>
            <span class="line"></span>
        </div>
    </div>
    <%--tab-信息--%>
    <div class="content_info content" v-show="tab===0">
        <div class="tip">
            <div>{{DetailDate.ProjectNum}}</div>
            
            <div><span>{{DetailDate.ProjectName}}</span></div>
        </div>
        <div class="info">
            <div class="list base_info">
                <div class="left">
                    <span>计划上线时间</span>
                    <span>
                        <i v-html="customDate(DetailDate.PlanSubmitDate)[0]"></i>
                         <i v-html="customDate(DetailDate.PlanSubmitDate)[1]"></i>
                    </span>
                    <span>{{DetailDate.VersionNo}}</span>
                </div>
                <div class="right">
                    <p>{{DetailDate.ProductName}}</p>
                    <p>{{DetailDate.ProjectManager}}</p>
                    <p>{{DetailDate.DeptName}}</p>
                </div>
            </div>
            <div class="list test_info">
                <div class="left">
                    <span>提测日期</span>
                    <span>
                         <i v-html="customDate(DetailDate.SubmitDate)[0]"></i>
                          <i v-html="customDate(DetailDate.SubmitDate)[1]"></i>
                    </span>
                    <span>{{DetailDate.TestType}}</span>
                </div>
                <div class="right">
                    <p>{{DetailDate.TestContents}}</p>
                    <p>{{DetailDate.TestSupport}}</p>
                    <p>{{DetailDate.ContactInfo}}</p>
                </div>
            </div>
        </div>
        <div class="version_text">
            <p>{{DetailDate.VersionContents}}</p>
        </div>
        
        <!--页面环境相关链接-->
        <div class="link">
            <div class="btn" @click="isShowLinkShow">页面环境链接</div>
            <ul class="linkLists" :class="{no_data: !isHaveDataLinks}" v-show="isShowLink" @click="isShowLinkHide">
                <li v-if="isHaveDataLinks" v-for="(dataScapeSite,index) in dataScapeSiteSearch">
             
                        <span class="icon"></span>
                        <span class="link">{{dataScapeSite.PageSite}}</span>
                        <span class="text">{{dataScapeSite.Remark}}</span>
                   
                </li>
                <li v-show="!isHaveDataLinks">暂无相关链接</li>
            </ul>
        </div>

        


    </div>
    <%--tab-结果--%>
    <div class="content_res content" v-show="tab===1">
        <div class="module">
            <div class="title clearfix">
                <span></span>
                <span>渗透测试</span>
            </div>
            <ul>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">高风险缺陷数量</div>
                    <div class="value">{{DataLeaks.HighriskCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">中风险缺陷数量</div>
                    <div class="value">{{DataLeaks.MediumRiskCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">低风险缺陷数量</div>
                    <div class="value">{{DataLeaks.LowRiskCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">渗透测试人员</div>
                    <div class="value">{{DataLeaks.LeakspermeateName}}</div>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="title clearfix">
                <span></span>
                <span>页面扫描</span>
            </div>
            <ul>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">解决重要级别数量/重要级别数量</div>
                    <div class="value">{{DataLeaks.SolveImportantCount}}/{{DataLeaks.ImportantLevelCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">解决高级别数量/高级别数量</div>
                    <div class="value">{{DataLeaks.SolveHighCount}}/{{DataLeaks.HighLevelCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">手工验证数量</div>
                    <div class="value">{{DataLeaks.HandValidateCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">安全测试人员</div>
                    <div class="value">{{DataLeaks.LeaksSafeName}}</div>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="title clearfix">
                <span></span>
                <span>源码扫描</span>
            </div>
            <ul>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">解决重量级别数量/重量级别数量</div>
                    <div class="value">{{DataLeaks.SolveSourceCodeImportantLevelCount}}/{{DataLeaks.SourceCodeImportantLevelCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">解决高级别数量/高级别数量</div>
                    <div class="value">{{DataLeaks.SolveSourceCodeHighLevelCount}}/{{DataLeaks.SourceCodeHighLevelCount}}</div>
                </li>
                <li class="clearfix">
                    <div class="icon_code">
                        <span class="line"></span>
                    </div>
                    <div class="key">手工验证数量</div>
                    <div class="value">{{DataLeaks.SourceCodeHandValidateCount}}</div>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="title clearfix">
                <span></span>
                <span>测试报告</span>
            </div>
            <ul class="test_report" v-for="(File,index) in DetailFile">
                <li class="clearfix">
                    <a :href="fileUrl+File.FilePath">
                        <div class="icon_file"></div>
                        <div class="text">
                            <div>{{File.AttachmentFileName}}</div>
                        <div>
                             <span>{{File.CreateDate|time}}</span>
                              <span>上传</span>
                         </div>
                        </div>
                        <div class="icon_download"></div>
                    </a>
                    
                </li>
              <%--  <li class="clearfix">
                    <div class="icon_file"></div>
                    <div class="text">
                        <div>ITMSv4.6.10安全性测试报告.docx</div>
                        <div>
                            <span>26KB</span>
                            <span>2019/02/12</span>
                            <span>上传</span>
                        </div>
                    </div>
                    <div class="icon_download"></div>
                </li>--%>
            </ul>
        </div>
    </div>
    <%--tab-流程--%>
    <div class="content" id="partner-only-proc" v-show="tab===2">
        <ul>
          <li v-for="(data,index) in DetailFlow">
            <div class="time-label">
              <time class="time-label-date" v-html="customDate(data.RevieweDate)[0]"></time><br>
              <time class="time-label-time" v-html="customDate(data.RevieweDate)[1]"></time>
            </div>
            <div class="proc-content">
              <i v-show="data.FlowStatus=='未处理'"></i>
              <div><strong>{{data.RoleName}}</strong></div>
              <div>{{data.RevieweContent}}</div>
            </div>
          </li>
        </ul>
      </div>
    <!--通过退回-->
    <div class="yesOrNo">
        <div class="yes">
            <span></span>
            <span @click="yesHandle()">通过</span>
        </div>
        <div class="no">
            <span></span>
            <span @click="noHandle()">退回</span>
        </div>
    </div>
    <!--蒙版-->
    <div class="cloud_modal" v-show="isShowCloud" @click="cloudModal($event)">
        <div class="noIdea">
            <div class="text">
                <textarea name="" id="textarea_no" rows="3" placeholder="请输入审核建议" class="textarea_no" ref="textarea_no"></textarea>
            </div>
            <div class="btn">
                <span class="sure_no">提交</span>
                <span class="return_no">返回</span>
            </div>
        </div>
    </div>
    <!--页面环境链接蒙版-->
    <div class="modal_link" v-show="isShowLink" @click="isShowLinkHide"></div>
</div>
<script src="../js/jquery.min.js"></script>
<script src="../js/vue.min.js"></script>
<script src="../js/mintUi.js"></script>
     <script src="../js/iview.min.js"></script>

<script>
    $(function () {
        var FileUrl = $("#hidWebPath").val();
        var Userid = $("#Userid").val();
        var id = $("#Id").val();
        var vm = new Vue({
            el: '#app',
            data: {
                spinShow: true,
                tab: 0, //控制tab栏切换
                isShowCloud: false, //蒙版是否显示
                isShowLink: false,  //链接列表和蒙版是否显示
                isHaveDataLinks: true,  //页面环境链接是否有数据
                DetailDate: {},//页面详情
                DetailFlow: [],//流程
                DetailFile: [],//附件
                DataLeaks: [],//安全测试结果
                dataScapeSiteSearch: [],//环境地址
                fileUrl: FileUrl + '/'
            },
            mounted: function () {
                this.getDetail();

            },
            methods: {
                // 通过
                yesHandle: function () {
                    var _this = this;
                    if (confirm('确认提交?')) {
                        $.ajax({
                            url: "../ashx/SafeTest.ashx?method=Alladopt&ID=" + id + "&Userid=" + Userid,
                            async: false,
                            type: 'get',
                            dataType: 'json',
                           
                            success: function (response) {
                                _this.spinShow = false;
                                if (response == "成功") {
                                    _this.$Message.success("提交成功！");
                                    window.setTimeout("window.location = '../html/version-safeTest-list.aspx'", 1000);

                                }

                            },
                            error: function (response) {
                                _this.$Message.info("审核失败")
                                _this.spinShow = false;
                            }


                        })
                    }
                },
                // 退回
                noHandle: function () {
                    this.isShowCloud = true;
                },
                // 提交建议业务逻辑
                cloudModal: function (event) {
                    var eTarget = event.target; //事件源dom
                    var eTargetClass = eTarget.className;
                    var textarea = this.$refs.textarea_no;  //文本域dom
                    var revieweContent = $("#textarea_no").val();
                    //如果点击的是蒙版或者返回按钮则隐藏蒙版
                    if (eTarget === event.currentTarget || eTargetClass === 'return_no') {
                        this.isShowCloud = false;
                    } else if (eTargetClass === 'sure_no') {
                        //否则点击就是提交按钮
                        var textareaVal = textarea.value;
                        if (textareaVal.length > 0) {
                            if (confirm('确认提交?')) {
                                $.ajax({
                                    url: "../ashx/SafeTest.ashx?method=Return&ID=" + id + "&Userid=" + Userid + "&revieweContent=" + revieweContent,
                                    type: 'get',
                                    dataType: 'json',
                                    success: function (data) {
                                        vm.isShowCloud = false;
                                        if (data == "成功")
                                        {
                                            vm.$Message.success("退回成功！");
                                            window.setTimeout("window.location = '../html/version-safeTest-list.aspx'", 1000);

                                        }
                                    },
                                    error:function()
                                    {
                                        vm.$Message.success("退回失败！");

                                    }

                                })
                            }
                        }
                        else {
                            vm.$toast({
                                message: '提交失败，请输入建议',
                                position: 'top',
                                duration: 1500
                            });
                        }
                    }
                },
                //页面环境链接显示/隐藏
                isShowLinkShow: function () {
                    this.isShowLink = true;
                },
                isShowLinkHide: function () {
                    this.isShowLink = false;
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
                getDetail: function () {
                    var _this = this;
                    //详情获取
                    $.ajax({
                        type: "post",
                        url: ("../ashx/SafeTest.ashx?method=getDetail&ID=" + id),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            _this.DetailDate = result;
                            // getUserName(result.Table);
                            _this.spinShow = false;

                        },
                        error: function (result) {
                            _this.spinShow = false;


                        }

                    }),
                    //附件获取
                     $.ajax({
                         type: "post",
                         url: ("../ashx/SafeTest.ashx?method=GetAllProjectAttachment&ID=" + id),
                         contentType: "application/json; charset=utf-8",
                         dataType: "json",
                         success: function (result) {
                             _this.DetailFile = result.Table;
                             // getUserName(result.Table);
                             _this.spinShow = false;

                         },
                         error: function (result) {
                             _this.spinShow = false;


                         }

                     }),
                    //流程获取
                     $.ajax({
                         type: "post",
                         url: ("../ashx/SafeTest.ashx?method=GetReviewInfo&ID=" + id),
                         contentType: "application/json; charset=utf-8",
                         dataType: "json",
                         success: function (result) {
                             _this.DetailFlow = result.ReviewTable;
                             // getUserName(result.Table);
                             _this.spinShow = false;

                         },
                         error: function (result) {
                             _this.spinShow = false;


                         }

                     })
                    //安全测试结果
                    $.ajax({
                        type: "post",
                        url: ("../ashx/SafeTest.ashx?method=GetTestLeaksInfo&ID=" + id),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            _this.DataLeaks = result.Table[0];
                            // getUserName(result.Table);
                            _this.spinShow = false;

                        },
                        error: function (result) {
                            _this.spinShow = false;


                        }

                    })

                    //获取页面环境地址
                    $.ajax({
                        type: "post",
                        url: ("../ashx/SafeTest.ashx?method=LandScapeSiteSearchByID&ID=" + id),
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (result) {
                            if(result.Table.length == 0) {
                                _this.isHaveDataLinks = false;
                            }
                             _this.dataScapeSiteSearch = result.Table;
                            // getUserName(result.Table);
                            _this.spinShow = false;

                        },
                        error: function (result) {
                            _this.spinShow = false;


                        }

                    })
                }
            }
        });
    });
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
</script>
</body>
</html>