(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-233171e3"],{"0dfc":function(t,a,e){"use strict";var i=e("f3d4"),n=e.n(i);n.a},2889:function(t,a,e){"use strict";var i=e("455f"),n=e.n(i);n.a},"42f0":function(t,a,e){},"455f":function(t,a,e){},9406:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"dashboard-editor-container"},[e("panel-group"),t._v(" "),e("boce-chat")],1)},n=[],s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.domain_loading,expression:"domain_loading"}],staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-people"},[e("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("总域名数")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.domain_total,duration:2600}})],1)])]),t._v(" "),e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.boce_loading,expression:"boce_loading"}],staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-message"},[e("svg-icon",{attrs:{"icon-class":"message","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("总拨测任务")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.boce_total,duration:3e3}})],1)])]),t._v(" "),e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.group_loading,expression:"group_loading"}],staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-money"},[e("svg-icon",{attrs:{"icon-class":"money","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("拨测执行器")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.group_total,duration:3200}})],1)])]),t._v(" "),e("el-col",{directives:[{name:"loading",rawName:"v-loading",value:t.log_loading,expression:"log_loading"}],staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[e("svg-icon",{attrs:{"icon-class":"shopping","class-name":"card-panel-icon"}})],1),t._v(" "),e("div",{staticClass:"card-panel-description"},[e("div",{staticClass:"card-panel-text"},[t._v("本周执行任务数")]),t._v(" "),e("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.log_total,duration:3600}})],1)])])],1)},o=[],r=e("ec1b"),l=e.n(r),c=e("8c63"),d={components:{CountTo:l.a},data:function(){return{domain_total:0,domain_loading:!1,boce_total:0,boce_loading:!1,group_total:0,group_loading:!1,log_total:0,log_loading:!1,listQuery:{}}},created:function(){this.getDomainList(),this.getBoceList(),this.getBoceGroupList(),this.getLogCountList()},methods:{getDomainList:function(){var t=this;this.domain_loading=!0,c["f"].requestGet().then((function(a){t.domain_loading=!1,t.domain_total=a.results.length}))},getBoceList:function(){var t=this;this.boce_loading=!0,c["o"].requestGet().then((function(a){t.boce_loading=!1,t.boce_total=a.results.length}))},getBoceGroupList:function(){var t=this;this.group_loading=!0,c["d"].get_group().then((function(a){t.group_loading=!1,t.group_total=a.results.length}))},getLogCountList:function(){var t=this;this.log_loading=!0,c["d"].get_log_count().then((function(a){t.log_loading=!1,t.log_total=a.results}))}}},u=d,p=(e("2889"),e("2877")),h=Object(p["a"])(u,s,o,!1,null,"268ebb60",null),g=h.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",{staticClass:"card-span-title"},[t._v("拨测任务报表")]),t._v(" "),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.changeDate},model:{value:t.selectdata,callback:function(a){t.selectdata=a},expression:"selectdata"}})],1)],1),t._v(" "),e("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.xxljob_loading,expression:"xxljob_loading"}],attrs:{gutter:32}},[e("el-col",{attrs:{xs:24,sm:24,lg:16}},[e("div",{staticClass:"chart-wrapper"},[e("bar-chart",{ref:"bar",attrs:{optionData:t.baroptionData}})],1)]),t._v(" "),e("el-col",{attrs:{xs:24,sm:24,lg:8}},[e("div",{staticClass:"chart-wrapper"},[e("pie-chart",{ref:"pie",attrs:{optionData:t.pieoptionData}})],1)])],1)],1)},v=[],f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},_=[],b=e("313e"),x=e.n(b),y=e("ed08");e("817d");var C={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},optionData:{type:Object,default:{}}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(y["c"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.chart.setOption(this.optionData)}}},D=C,w=Object(p["a"])(D,f,_,!1,null,null,null),k=w.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,style:{height:t.height,width:t.width}})},L=[];e("817d");var O={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},optionData:{type:Object,default:{}}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.__resizeHandler=Object(y["c"])((function(){t.chart&&t.chart.resize()}),100),window.addEventListener("resize",this.__resizeHandler)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHandler),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=x.a.init(this.$el,"macarons"),this.chart.setOption(this.optionData)}}},T=O,$=Object(p["a"])(T,j,L,!1,null,null,null),S=$.exports,Q={name:"bocechat",components:{PieChart:k,BarChart:S},data:function(){return{xxljob_loading:!1,selectdata:["",""],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,a])}},{text:"最近一个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,a])}},{text:"最近三个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,a])}}]},listQuery:{startDate:void 0,endDate:void 0},baroptionData:{title:{text:"日期分布图",left:"left"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["成功","失败","进行中"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"成功",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"失败",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"进行中",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]}]},pieoptionData:{title:{text:"成败分布图",left:"left"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",data:["成功","失败","进行中"]},toolbox:{feature:{saveAsImage:{}}},calculable:!0,series:[{name:"成败比例图",type:"pie",roseType:"radius",radius:[10,80],center:["50%","50%"],data:[1,2,3],animationEasing:"cubicInOut",animationDuration:1600}]}}},computed:{},created:function(){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),this.listQuery.startDate=this.selectdata[0]=Object(y["a"])(a),this.listQuery.endDate=this.selectdata[1]=Object(y["a"])(t),this.fetchChat()},methods:{changeDate:function(t){this.listQuery.startDate=t[0],this.listQuery.endDate=t[1],this.fetchChat()},fetchChat:function(){var t=this;this.xxljob_loading=!0,c["d"].chatinfo(this.listQuery).then((function(a){t.xxljob_loading=!1;var e=a.results.content;t.baroptionData.xAxis[0].data=e.triggerDayList,t.baroptionData.series[0].data=e.triggerDayCountSucList,t.baroptionData.series[1].data=e.triggerDayCountFailList,t.baroptionData.series[2].data=e.triggerDayCountRunningList,t.$refs.bar.initChart(),t.pieoptionData.series[0].data=[{value:e.triggerCountSucTotal,name:"成功"},{value:e.triggerCountFailTotal,name:"失败"},{value:e.triggerCountRunningTotal,name:"进行中"}],t.$refs.pie.initChart()}))}}},z=Q,E=(e("d420"),Object(p["a"])(z,m,v,!1,null,"22be4db8",null)),A=E.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("报表")]),t._v(" "),e("el-select",{staticStyle:{float:"right",padding:"3px 0"},attrs:{filterable:"",placeholder:"请选择"},on:{change:t.fetchChat},model:{value:t.listQuery.domain,callback:function(a){t.$set(t.listQuery,"domain",a)},expression:"listQuery.domain"}},t._l(t.domains,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),t._v(" "),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":t.pickerOptions,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.changeDate},model:{value:t.selectdata,callback:function(a){t.selectdata=a},expression:"selectdata"}})],1)],1),t._v(" "),e("div",{staticClass:"chart-wrapper"},[e("bar-chart",{ref:"bar",attrs:{optionData:t.baroptionData}})],1)])},N=[],G={name:"bocechat",components:{BarChart:S},data:function(){return{domains:[],xxljob_loading:!1,selectdata:["",""],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,a])}},{text:"最近一个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,a])}},{text:"最近三个月",onClick:function(t){var a=new Date,e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,a])}}]},listQuery:{startDate:void 0,endDate:void 0,domain:"http://kok21.app"},baroptionData:{title:{text:"日期分布图",left:"left"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["最大值","最小值","平均值"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"最大值",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"最小值",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"平均值",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]}]}}},computed:{},created:function(){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),this.listQuery.startDate=this.selectdata[0]=Object(y["a"])(a),this.listQuery.endDate=this.selectdata[1]=Object(y["a"])(t),this.fetchChat(),this.getDomainList()},methods:{getDomainList:function(){var t=this;c["f"].requestGet().then((function(a){t.domains=a.results}))},changeDate:function(t){this.listQuery.startDate=t[0],this.listQuery.endDate=t[1],this.fetchChat()},fetchChat:function(){var t=this;this.xxljob_loading=!0,c["d"].domain_delay(this.listQuery).then((function(a){t.xxljob_loading=!1;var e=a.results;t.baroptionData.xAxis[0].data=e.endpoint,t.baroptionData.series[0].data=e.max_value,t.baroptionData.series[1].data=e.min_value,t.baroptionData.series[2].data=e.median_value,t.$refs.bar.initChart()}))}}},B=G,I=Object(p["a"])(B,H,N,!1,null,"694bdb13",null),M=I.exports,P={name:"DashboardAdmin",components:{PanelGroup:g,boceChat:A,domainDelay:M},data:function(){return{}},computed:{},methods:{}},q=P,F=(e("0dfc"),Object(p["a"])(q,i,n,!1,null,"7c10b75f",null));a["default"]=F.exports},d420:function(t,a,e){"use strict";var i=e("42f0"),n=e.n(i);n.a},f3d4:function(t,a,e){}}]);