<template>
	<div class="footer">
		<div class="footer-wrapper">
			<div class="footer-item">
				<span class="footer-item-title">关于</span>
				<span class="footer-item-link"><router-link to="/aboutUs">关于我们</router-link></span>
				<span class="footer-item-link"><router-link to="/joinUs">加入我们</router-link></span>
				<span class="footer-item-link"><router-link to="/contactUs">联系我们</router-link></span>
			</div>
			<div class="footer-item">
				<span class="footer-item-title">帮助</span>
				<span class="footer-item-link"><router-link to="/FooterNav/CommonProblem" target="_blank">常见问题</router-link></span>

				<span class="footer-item-link"><router-link to="/FooterNav/APIDocument" target="_blank">API文档</router-link></span>

				<span class="footer-item-link"><router-link to="#">Python教程</router-link></span><span class="footer-item-link"><router-link to="#">系统更新日志</router-link></span>
				<span class="footer-item-link"><router-link to="#">数据调整记录</router-link></span>
			</div>
			<div class="footer-item">
				<span class="footer-item-title">友情链接</span>
				<span class="footer-item-link"><a href="http://forum.thuquant.com" target="_blank">清华量协论坛</a></span>
				<span class="footer-item-link"><a href="https://zhuanlan.zhihu.com/THQuant" target="_blank">知乎专栏</a></span>
			</div>
			<!-- <div class="footer-item">
				<span class="footer-item-title">关注我们</span>
				
			</div> -->
			<div class="footer-QR-code">
				<div style="margin-right: 54px;" class="QR-code-wrapper">
					<img src="/static/Home/wechat.jpg" style="margin: 10px 0px;">
					<span>扫描关注</span>
					<span>微信公众号</span>
				</div>
				<div class="QR-code-wrapper">
					<img src="/static/Home/qq.jpg" style="margin: 10px 0px;">
					<span>QQ群</span>
					<span>12458621</span>
				</div>
				
			</div>
			<div style="font-size: 12px; text-align: center; padding-top: 30px; padding-bottom:30px;">
				@2017 | <a style="width: auto; color: #999999;" href="http://www.miitbeian.gov.cn/">京ICP备17064046号-1</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	}
}
</script>

<style lang="scss">
	.footer {
		background-color: #171F27;
		font-size: 16px;
		// height: 356px;
		color: #999999;
		padding-top: 50px;

		.footer-wrapper {
			width: 1100px;
			margin: 0 auto;
		}

		.footer-item {
			width: 220px;
			vertical-align: top;
			display: inline-block;

			.footer-item-title {
				font-size: 20px;
				color: #FFFFFF;
				display: block;
				padding-bottom: 24px;
			}

			.footer-item-link {
				display: block;
				padding-bottom: 26px;

				a {
					text-decoration: none;
					color: #999999;
					cursor: pointer;
				}
			}
		}

		.footer-QR-code {
			width: 420px;
			font-size: 14px;
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
				}
			}
		}
	}
</style>