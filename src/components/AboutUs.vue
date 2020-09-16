<template>
	<div id="about-us">
		<nav-bar :navMenuItems="aboutUsMenu"></nav-bar>


		<div class="main" style="background-color:#ffffff;">
			<div class="banner-pane">
				<img src="/static/aboutus/about-slogan.png" style="margin-top: 124px;">
			</div>

		<div class="left-bar">
			<span class="left-bar-space"></span>
				<span class="left-bar-link"><router-link to="/aboutUs" >公司介绍<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
				<span class="left-bar-link"><router-link to="/joinUs">加入我们<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
				<span class="left-bar-link"><router-link to="/contactUs">联系我们<img src="/static/footer-public/icon_morendecome.png" onMouseOver="this.src='/static/footer-public/icon_dianjidejinqu.png'" onMouseOut="this.src='/static/footer-public/icon_morendecome.png'"></router-link></span>
			</div>

			<div class="about-content-wrapper">
				<div class="about-title">公司介绍</div>
				<span class="about-etitle">Company Profile</span>
				<div class="about-content">
					北京天鸿钧策科技有限公司（2016年7月21日成立），致力于量化投资、人工智能投顾的技术开发及模型研发相关，并提供相关咨询服务。本公司创始人及核心工作团队由清华金融、物理、计算机等专业博士及研究生同学组成，在量化策略、人工智能研发方面有深厚的理论基础，及最先进的量化实现技术。

				</div>

				<div class="about-title">产品介绍</div>
				<div class="about-etitle">product description</div>
				<div class="about-content">
					<div style="color:#333333;font-size: 16px;">人工智能投顾平台</div>
					开发人工智能模型，实现人工智能投顾，给金融领域的工作者分担数据分析和投资决策的任务、提供投资决策建议，定制特色化人工智能模块.
					<div style="color:#333333;font-size: 16px;">人工智能技术外包</div>
					外包人工智能实现技术，给拥有策略或需求策略的投资方提供实现智能投资及自动资产管理的技术。
				</div>
				<div class="pro-intro-image">
					<div>
					<img src="/static/aboutus/about-us1.png" style="padding-left:40px;padding-bottom:116px;max-width: 70%;">
					</div>
					<div class="pro-intro-image-title">人工智能(AI)投顾产品线规则</div>
					<div>
					<img src="/static/aboutus/about-us2.png" style="padding-left:10px;padding-bottom:48px;max-width: 100%;">
					</div>
					<div class="pro-intro-image-title">人工智能技术优势</div>
					<div>
					<img src="/static/aboutus/about-us3.png" style="max-width: 70%;">
					</div>
				</div>

				<div class="about-title">产品特色</div>
				<div class="about-etitle">feature of product</div>
				<div class="about-content">
					<div class="about-content-title">1.平台高效率、多品种、稳健性、安全性策略开发支持</div>
					<div class="about-content-title">2.策略开发及人工智能开发团队强大</div>
					<div class="about-content-content">依托清华学术平台：多位清华、北大的金融、数学、计算机以及其他与数据分析紧密相关专业的博士生、硕士生，在模型开发方面有深厚的理论模型基础及相关投资经验；学校教授、研究院支持.依托清华校友，具有一批业界精英的指导顾问。依托清华大学量化投资协会（于2016年3月19日创办），积聚高校和业界优质资源，创建高端人才社区，打造高校特色品牌，为量化策略开发者提供学习，交流和评价平台，让更多有潜力的高校学生成为具有全球竞争力的量化金融人才。
					</div>
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
	name: "AboutUs",
	data() {
		return {
			logoImage: "/static/logo.png",
			aboutUsMenu: Global.getPageMenu()
		};
	}
}
</script>

<style lang="scss">
	#about-us {
		
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

			.about-content-wrapper {
				margin: 0px 180px 138px 491px;
				.about-title {
					font-size: 32px;
					margin: 40px 0px 6px 0px;
					font-family: SimHei;
					color:#333333;
				}
				.about-etitle{
					color: #999999;
					font-size: 16px;
				}

				.about-content {
					font-size: 14px;
					padding: 22px 0px;
					color: #666666;
					line-height:29px;

				}
				h3{
					margin: 10px 0px 5px 0px;
				}
				.pro-intro-image {
					margin: 20px 0px;;
					position: relative;
					.pro-intro-image-title{
						text-align: left; 
						padding: 10px 0px 36px 0px;
						font-size: 22px;
					    color: #333333;
					}
				}
				.about-content-title{
						margin: 10px 0px 4px 0px;
						font-size: 16px;
						 color: #333333;
					}
				.about-content-content{
						margin: 7px 0px 4px 0px;
				}
			}

			
		}
	}
</style>