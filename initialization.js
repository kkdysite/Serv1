/* 区分测试还是线上*/

if (WL!='local'){
	for (i = 0; i < 20; i++) {
		console.log(i+' 自学编程，业余开发，熬夜无数，手下留情');
	}
}
if(window.location.host=='kkdysite.github.io'){
	WL='bak';
	static_file_suffix='';
	cdn_min='';
}


/* 首页公告 */
var notetitle='最新说明';
var notecontent='极致精简，去掉了一些不常用功能，请从搜索开始使用。';
notecontent+='热片推荐近期会推送更新，请耐心等待。11月之前安卓和电脑版客户端更新。<br>如您有建议和反馈，欢迎留言给我们。';
notecontent+='<br>最后更新: 2020.'+laset_ver+'<a href="javascript:Div_show_hide(\'MoreNote\',\'openMoreNote\',\' 详细 \')" class="openMoreNote"> 详细 </a>';
notecontent+='<div class="hide MoreNote">';
notecontent+='<div style="text-align: center;">==== 预 告 ====</div>';
notecontent+='正在迁移到github，期间可能会有部分用户无法打开，请重启设备或者切换网络。';
notecontent+='<div style="text-align: center;">==== 最近更新 ====</div>';
notecontent+='[08-25 19:50]修复苹果设备横竖屏转回bug<br>  修复了app内的注册的bug<br>';
notecontent+='[08-19 20:30]修复分享的二维码的bug<br>';
notecontent+='[08-16 16:10]修复播放记录不能自动更新的bug<br>[08-13 23:30]新增资源库(天空云)<br>';
notecontent+='</div>';

var SharpUrl_dl='http://app.kkdy.website/';
var SharpUrl_reg='http://app.kkdy.website/#page_reg';
var SharpUrl_dl_uid='http://app.kkdy.website/?uid=UID';
var SharpUrl_reg_uid='http://app.kkdy.website/?uid=UID#page_reg';
var Invitation_code_prefix=9900; //邀请码前缀 ★


var app_name={'web':'看看电影.com','local':'测试_看看电影','bak':'看看电影(备用)'};
var app_var='<br>中文网址：看看电影.com<br>';
app_var+='云版号：ver.'+laset_ver+'<br>';
app_var+=window.location.host;
 //模板文件地址 css js地址 api
var cdn='https://cdn.jsdelivr.net/gh/kkdysite/app.kkdy.website@master/';
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
/** 测试站  区分本地测试 还是服务器  */
var api_vhost={
	 'web':'http://dl.kkdy.site/_api_vhost_php_sqlite_'+laset_ver+'/api_vhost.php',
	 'local':'http://TestUrl/_api_vhost_php_sqlite_'+laset_ver+'/api_vhost.php'
	};
	//本地测试情况下 把域名里面的 html替换为vhost
	api_vhost['local']=api_vhost['local'].replace(/TestUrl/,window.location.host.replace(/html/,'vhost'));
var localStor_name_u_info='u_info_2020';
var localStor_name_u_fav='u_fav_2020';
var localStor_name_u_played='played';
var localStor_name_u_portable_fav='u_portable_fav2020';

//var static_file_suffix ="";
var portable_url='t.kkdy.website';

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


var webapp_tips=new Array(
	'偶尔接在失败重新点一下对应的剧集即可，或者切换播放源或解析线路后再播放',
	'播放过的影片点底部的小时钟或功能导航的播放记录可以看到，也会记住你看到那一集，不用每次搜索',
	'苹果设备请允许屏幕旋转才可以全屏播放',
	'部分安卓手机无法投屏，请使用手机自带投屏或者使用机顶盒版',
	'限于平台制约，我暂时无法记录你看到每一集的第几分钟',
	'如果喜欢我，请推荐给您的朋友'
	);
var hotKeyWords='重启之极海听雷|漂亮书生|大侠霍元甲|他其实没有那么爱你|穿盔甲的少女|非常目击|航海王|幸福还会来敲门|忘不了餐厅|且听凤鸣|极限挑战宝藏行|摩天大楼|月光恋|潮玩人类在哪里|青春环游记|完美夏天|乐队的夏天';
hotKeyWords+='|上海王|如此可爱的我们|香肠派对|花木兰之大漠营救|连环追击|怪兽猎人|哥斯拉2|狙击手|怪物先生|大幻术师|征途|哪吒之魔童降世|铁血神探';



//调用index.js
$.getScript(tpl_Js_ac[WL]+'_mian'+cdn_min+'.js'+static_file_suffix, function(){});
