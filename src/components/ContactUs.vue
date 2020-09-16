<template>
	<div id="contact-us">
		<nav-bar :navMenuItems="contactUsMenu"></nav-bar>


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

			<div class="contact-content-wrapper">

				<div class="contact-title">联系方式</div>
				<span class="contact-etitle">contact us</span>
				<div class="contact-content">
					<p>手机号：15210560798</p>
					<p>微   信：jhytxyy</p>
					<p>邮   箱：iTHink_THJC@163.com</p>
					<p>Q    Q :  156039576</p>
				</div>

				<div class="contact-title">其他途径</div>
				<span class="contact-etitle">other ways</span>
				<div class="contact-content">
				打开手机扫一扫，最新资讯最快掌握。你的关注是我们前进的动力。	
				</div>

				
				<div class="footer-QR-code">
				<div style="margin-right: 54px;" class="QR-code-wrapper">
					<img src="/static/Home/wechat.jpg" style="margin: 10px 0px;">
					<span style="font-size:14px;color:#333333;line-height:18px;">扫描关注</span>
					<span style="font-size:14px;color:#333333;line-height:18px;">微信公众号</span>
				</div>
				<div class="QR-code-wrapper">
					<img src="/static/Home/qq.jpg" style="margin: 12px 0px;">
					<span style="font-size:14px;color:#333333;line-height:18px;">QQ群</span>
					<span style="font-size:14px;color:#333333;line-height:18px;">12458621</span>
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
	name: "ContactUs",
	data() {
		return {
			logoImage: "/static/logo.png",
			contactUsMenu: Global.getPageMenu()
		};
	}
}
</script>

<style lang="scss">
	#contact-us {
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

			.contact-content-wrapper {
				margin: 0px 180px 110px 491px;

				.contact-title {
					font-size: 32px;
					margin: 40px 0px 6px 0px;
					font-family: SimHei;
					color:#333333;
					line-height:29px;
				}
				.contact-etitle{
					color: #999999;
					font-size: 16px;
					line-height:29px;
				}
				.contact-content {
					font-size: 14px;
					padding: 26px 0px;
					color: #666666;
					line-height:24px;
				}

				.pro-intro-image {
					margin: 40px 0px;;
					position: relative;
				}

.footer-QR-code {
			width: 420px;
			
			display: inline-block;

			.QR-code-wrapper {
				display: inline-block;
				background-color: #FFFFFF;
				width: 172px;
				height: 234px;
				border-radius: 8px;
				text-align: center;
				font-size: 20px;
				color: #333333;

				span{
					display: block;
					text-align: center;
					font-size: 14px;
				}
			}
		}

			}
		}
	}
</style>