<template>
	<div id="AI-advisor">
		<nav-bar :navMenuItems="AIadvisorMenu">
		</nav-bar>

		 <div class="analysis-city">
          <div class="banner">     	
          	<img src="/static/AIanalysis/icon_wenzi.png" style="text-align: center; margin-top: 98px;">
          </div>
      </div>
		<div class="AI-advisor-main">
			<el-row  justify="center">	
				<el-col >
					<router-view></router-view>
				</el-col>
			</el-row>
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
		FooterBar,
		Global
	},
	mounted() {
		document.body.style.overflow = "auto";
	},
	data() {
		return {
			AIadvisorMenu: Global.getPageMenu("AISignalAnalysis"),
			AIadvisorLeftMenu: [
				{title: 'AI资产管家', link: '/AISignalAnalysis/assetsSteward'},
				{title: 'AI产品经理', link: '/AISignalAnalysis/productManager'},
				{title: 'AI策略师', link: '/AISignalAnalysis/strategist'}
				// {title: 'AI私家定制', index: '/AISignalAnalysis/customBuilt'}
			]
		}
	}
}
</script>

<style lang="scss">
	#AI-advisor {
		.analysis-city {
	      background-color: #F2F3F7;      
	    .banner{
	      background: url("/static/AIanalysis/signal-analysis-banner.png") no-repeat center center;    
	      text-align: center;
	      color: white;
	      height: 340px;
	      vertical-align: middle;
	      }
	  }
		.AI-advisor-main {
			padding-top: 10px;
			background-color: white;
		}

		.AI-nav-menu {
			background-color: white;
			padding-top: 100px;
			margin-right: 50px;

		a {
			text-decoration: none;
			color: black;

		&.router-link-active {
				color: #20a0ff;
			}
		}		
		}
		.font-18 {
			font-size: 18px;
		}
	}
</style>