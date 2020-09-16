<script type="text/javascript">
const commonMenu = [
	{id: "Home", title: "首页", link: "/", Target:"_self", selected: false},
	{id: "SignalDevelop", title: "信号开发", link: "/SignalDevelop", Target:"_self", selected: false},
	{id: "SignalCity", title: "信号商城", link: "/SignalCity", Target:"_self", selected: false},
	{id: "IntelligentTransaction", title: "智能交易", link: "/MyQuotation", Target:"_self", selected: false},
	{id: "SignalRing", title: "信号擂台", link: "/SignalPK", Target:"_self", selected: false,},

	{id: "AISignalAnalysis", title: "AI信号分析", link: "/AISignalAnalysis/assetsSteward", Target:"_self", selected: false, subMenus: [
				{title: 'AI经济周期', link: '/AISignalAnalysis/EconomicForecasts', Class:""},
				{title: 'AI资产管家', link: '/AISignalAnalysis/AssetsManagement', Class:""},
				{title: 'AI全球资产配置', link: '/AISignalAnalysis/assetsSteward', Class:""},
				{title: 'AI舆情分析', link: '/AISignalAnalysis/PublicOpinionAnalysis', Class:""},
				{title: 'AI基本页面分析', link: '/AISignalAnalysis/FundamentalAnalysis', Class:""}
			]},
	{id: "Community", title: "智能社区", link: "http://forum.thuquant.com", Target:"_blank", selected: false},

	{id: "Login", title: "注册/登陆", link: "/Login/:Location", Target:"_self", selected: false},
	{id: "MyAccount", title: "个人账户", link: "/MyAccount", Target:"_self", selected: false,
		subMenus:[
			{title:"注销登录", link:"", Class:"loginOut"}
		]
	}
]

function setCookie(cname, cvalue, exdays)
{
  var d = new Date();
  d.setTime(d.getTime()+(exdays*24*60*60*1000));
  var expires = "expires="+d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

//清除cookie
function ClearCookie() {
	document.cookie = "userphone=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	return "";
}

//请求失败后判断是否因为token失效
function IsToken(r,that) {
	if(r=="4202"){
		document.cookie = "userphone=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		console.log(window.location.hash);
		var C = window.location.hash;
		var currentLocation = C.substring(2);
		console.log(currentLocation);
		that.$router.push("/Login/" + currentLocation);
		console.log("token失效");
	}
	return "";
}

function isLogedin() {
	if(getCookie("token")) {
		return true;
	}else {
		return false;
	}
}

function getRequestHeader() {
	// return {"authentication": getCookie("authentication")};

	// 李庚鑫又改了这里
	return {"token": getCookie("token")};
	// return {"authentication": "w6M9wpkiwq7DlR0KXMKFYsOGFyV+woB0wp5lQkHCskHDrQTCg15hwrMZwpcIw6MWw5YNFWdJbsKJHMO4fA=="}
}

// 李庚鑫在这里做了改动

// 咱们官网用的网址，没数据，开发不用
// function getRequestUrl() {
// 	return "http://47.91.255.22:18000";
// }

// 开发用的是这个网址
function getRequestUrl() {
	// return "http://47.91.251.30:18000";
	return "http://166.111.17.116:18000";
	// return "wss://47.90.109.236:18000";
}

//数字货币行情url
function getDCMarketRequestUrl() {
	return "http://47.91.255.22:18000";
}

//股票期货行情url
function getStockNewsRequestUrl() {
	return "http://180.166.6.244:18000";
}

function getPageMenu(pageId) {
	var _isLogedin = isLogedin();
	for(var i=0; i<commonMenu.length; i++) {
		commonMenu[i].show = true;
		if(_isLogedin && commonMenu[i].id === "Login") {
			commonMenu[i].show = false;
		}
		if(!_isLogedin && commonMenu[i].id === "MyAccount") {
			commonMenu[i].show = false;
		}
		if(commonMenu[i].id === pageId) {
			commonMenu[i].selected = true;
		}else {
			commonMenu[i].selected = false;
		}
	}
	return commonMenu;
}

export default
{
  commonMenu,
  getPageMenu,
  setCookie,
  getCookie,
  ClearCookie,
  IsToken,
  isLogedin,
  getRequestHeader,
  getRequestUrl,
  getDCMarketRequestUrl,
  getStockNewsRequestUrl
}
</script>