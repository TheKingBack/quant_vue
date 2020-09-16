<template>
	<div id="join-us">
		<nav-bar :navMenuItems="joinUsMenu"></nav-bar>

		<div class="main" style="background-color:#ffffff;">
			<div class="banner-pane">
				<img src="/static/aboutus/about-slogan.png" style="margin-top: 124px;">
			</div>

			<div class="left-bar">
			<span class="left-bar-space"></span>
				<span class="left-bar-link"><router-link to="/aboutUs">公司介绍<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
				<span class="left-bar-link"><router-link to="/joinUs">加入我们<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
				<span class="left-bar-link"><router-link to="/contactUs">联系我们<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
			</div>

			<div class="join-content-wrapper">

				<div class="join-title">前端工程师（实习生）</div>
				<span class="join-etitle">font-end engineer(intem)</span>
				<div class="join-content">
					<div class="join-content-title1">薪资要求：面议</div>
					<div class="join-content-title2">岗位概述：</div>
					<p>1、参与公司项目中的WEB前端功能设计、开发和实现；</p>
					<p>2、负责对项目及产品前端全新开发、旧项目重构和更新维护；</p>
					<p>3、负前端开发WEB应用，并与后台人员进行对接；</p>
					<p>4、根据用户的需求，分析并给出最优的前台技术解决方案；</p>
					<p>5、网站页面在各主流浏览器中的兼容性调整，性能优化；</p>
					<p>6、维护及优化网站前端性能；</p>
					<p style="padding-bottom:24px;">7、与设计师、开发人员配合，调整修改页面；</p>

					<div class="join-content-title2">任职要求：</div>
					<p>1、本科以上学历，有前端开发项目经验者优先；</p>
					<p>2、熟悉各种web前端技术（HTML/CSS/Javascript等），熟悉常用的开源库（jQuery,Backbone.js,AngularJS,React.js,vue）,熟练跨浏览器、跨终端的开发，熟练使用git指令；</p>
					<p>3、有网站前端架构、前端性能、可访问性、可维护性等方面的实践经验；</p>
					<p>4、有责任心和较强的敬业精神，良好的沟通能力和团队合作精神；</p>
					<P style="padding-bottom:16px;">5、有Node.js或其他后端框架使用经验优先；</P>

				</div>

				<div class="join-title">后端工程师（实习生）</div>
				<span class="join-etitle">back-end engineer(intem)</span>
				<div class="join-content">
					<div class="join-content-title1">薪资要求：面议</div>
					<div class="join-content-title2">职位描述:</div>
					<div class="join-content-title2">工作内容:</div>
					<p>1、负责公司相关产品服务端的设计与研发，为用户提供稳定可靠的服务；</p>
					<p style="padding-bottom:24px;">2、参与需求分析、技术调研，撰写相关的技术文档；</p>

					<div class="join-content-title2">任职要求:</div>
					<p>1、精通Java基本语法，熟悉IO、集合等框架；</p>
					<p>2、熟练掌握设计模式、多线程，了解jvm；</p>
					<p>3、熟练掌握spring/springboot，了解原理，熟悉源码者优先；</p>
					<p>4、熟悉dybbo、thrift\websocket等通信机制；</p>
					<p>5、熟悉常用数据库、如mysql、redis、mongodb；</p>
					<p>6、了解linux常用命令与git指令；</p>
					<p style="padding-bottom:19px;">7、优秀的分析及解决问题的能力，责任心强，细心耐心；</p>
				</div>

				<div class="join-title">加入方式</div>
				<span class="join-etitle">join way</span>
				<div class="join-content">
					请将简历及相关作品发至iTHink_THJC@163.com,标题“职位名称+姓名”，并在正文中写明你想对我们说的话。
				</div>


				

			</div>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import Global from "@/components/layout/Global"

export default {
	components: {
		NavBar,
		FooterBar
	},
	name: "JoinUs",
	data() {
		return {
			logoImage: "/static/logo.png",
			joinUsMenu: Global.getPageMenu()
		};
	}
}
</script>

<style lang="scss">
	#join-us {
		.main {

			.banner-pane {
				height: 338px;
				 background: url("/static/aboutus/icon_banner.png") no-repeat center center;
				
				margin: 0px;
				text-align: center; 
			}

		.left-bar {
			width: 150px;
			vertical-align:top;
			display: inline-block;
			font-weight:bold;
			float:left;
			margin-left:180px;

			.left-bar-space{
				width:150px;
				height:30px;
				margin:20px;
			}

			.left-bar-link {
				width:214px;
				margin:20px;
				display: block;
				padding-top:8px;
				padding-bottom:12px;
				border-bottom:1px solid;
				border-bottom-color:#dcdcdc;
				font-size: 16px;
				a {
					width:214px;
					text-decoration: none;
					cursor: pointer;
					color:black;
					padding-left:10px;
				}
				a:hover{
					color:#50c7fd;
				}
				img{
					padding:0 40px 0 93px;
				    width:7px;
				}
			}
		}

			.join-content-wrapper {
				margin: 0px 180px 100px 491px;
				line-height:24px;
				.join-title {
					font-size: 32px;
					margin: 40px 0px 6px 0px;
					font-family: SimHei;
					color:#333333;
					line-height:29px;

				}
				.join-etitle{
					color: #999999;
					font-size: 16px;
					line-height:29px;
				}
				.join-content {
					font-size: 14px;
					padding: 26px 0px;
					color: #666666;
				}
				.join-content-title1{
					font-size: 16px;
					font-family: SimHei;
					margin-top: 10px;
					color: #333333;
				}
				.join-content-title2{
					font-size: 14px;
					margin-top: 12px;
				}
				.pro-intro-image {
					margin: 40px 0px;;
					position: relative;
				}


			}
		}
	}
</style>