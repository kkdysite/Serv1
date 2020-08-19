if (window.location.host=='192.168.1.88:81'){
	var WL='local';
}else if(window.location.host=='kkdysite.github.io'){
	var WL='bak';
}else{
	var WL='web';
}
var notetitle='App更新';
var notecontent=' 新版本极致精简，去掉了一些不常用功能，请从搜索开始使用。<br>热片推荐和安卓新客户端近期会推送更新，请耐心等待。<br>如您有建议和反馈，欢迎留言给我们。<br><div style="text-align: center;">=== 最近更新 ====</div>';
notecontent+='[08-19 16:00]解决了一些已知问题<br>';
notecontent+='[08-16 16:10]修复播放记录更新bug，优化图文列表<br>[08-13 23:30]新增资源库(天空云)<br>[08-06 07:00]Win电脑新版客户端已发布<br>[08-05 21:30]优化免安装版和收藏夹<br>[08-04                09:30]mac版本客户端已发布。<br>';

var app_name={'web':'看看电影.com','local':'测试_看看电影','bak':'看看电影(备用)'};
 //模板文件地址 css js地址 api
 var cdn='https://cdn.jsdelivr.net/gh/kkdysite/webapp@master/tpl/0819_4';
 var tpl_Js_html={
	 'web':cdn+'/tpl_Js_html/',
	 'local':'./tpl_Js_html/',
	 'bak':"./tpl_Js_html/"
};
 var tpl_css={
	 'web':cdn+'/tpl_css/',
	 'local':'./tpl_css/',
	 'bak':"./tpl_css/"
	};
 var tpl_Js_ac={
	 'web':cdn+'/tpl_Js_ac/',
	 'local':'./tpl_Js_ac/',
	 'bak':"./tpl_Js_ac/"
	};

 var api_vhost={
	 'web':'http://dl.kkdy.site/_api_vhost_php_sqlite_202008008/api_vhost.php',
	 'local':'http://192.168.1.88:82/_api_vhost_php_sqlite_202008008/api_vhost.php'
	};

 var localStor_name_u_info='u_info_2020';
 var localStor_name_u_fav='u_fav_2020';
 var localStor_name_u_played='played';
 var localStor_name_u_portable_fav='u_portable_fav2020';

//var static_file_suffix ="";
var portable_url='http://t.kkdy.website';

//解析服务器
var ParseServ1="https://api.fenglinys.net/?url=";
var ParseServ2="https://api.3jx.top/vip/?url=";
var ParseServ3="https://jx.fuxing56.com/beiyong/?url=";
var ParseServ4="https://jx.yunboys.cn/?url=";
//播放器配置
var players_url = {
	"qq": ["qq", "腾讯", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"youku": ["youku", "优酷", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"qiyi": ["qiyi", "爱奇艺", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"sohu": ["sohu", "搜狐", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"pptv": ["pptv", "PP视频", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"mgtv": ["mgtv", "芒果", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"wasu": ["wasu", "华数", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"letv": ["letv", "乐视", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"m1905": ["m1905", "1905", ParseServ1 ,ParseServ2, ParseServ3, ParseServ4],
	"funshion": ["funshion", "风行", ParseServ1, ParseServ2, ParseServ3, ParseServ4],
	"kuyun": ["kuyun", "欧凯云", "-", "-", "-", "-"],
	"tkm3u8": ["tkm3u8", "天空云", "https://jx.huishij.com/yun/?url=", "https://jx.huishij.com/yun/?url=", "https://jx.huishij.com/yun/?url=", "https://jx.huishij.com/yun/?url="]
};
//会员设定 只用来计算剩余积分
var vip_setting = {
	"id": 3,
	"name": "受限会员",
	"vipname": "至尊会员",
	"1": 50,
	"7": 168,
	"31": 500,
	"365": 5000,
	"730": 9000,
	"1096": 28000,
	"3650000": 50000
};


var Invitation_code_prefix=9900; //邀请码前缀 ★


//调用index.js
$.getScript(tpl_Js_ac[WL]+'_mian.js'+static_file_suffix, function(){});
