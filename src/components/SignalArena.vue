<template>
	<div id="signal-arena">
	<nav-bar :navMenuItems="SignalArenaMenu"></nav-bar>

		 <div class="signal-banner">
          <div class="banner">     	
          	<img src="/static/SignalArena/icon_biaoti.png" style="text-align: center; margin-top: 98px;">

         <div style="padding-top: 52px; text-align: center;">
					<div style="display: inline-block;">
						<div class="signal-arena-banner-button" style="background-color: #14AAFF; border: 1px solid #14AAFF;">
						  <a @click="gotoSignalDevelopPage">参加量化金融大赛</a>	
						</div>
					</div>
				</div>
          </div> 

      </div>
		<div class="arenaTab">
	 	<el-tabs v-model="activeName">
    <el-tab-pane label="信号擂台" name="first">
    	 <my-strategist></my-strategist>
    </el-tab-pane>
    <el-tab-pane label="我的策略" name="second">
    	 <signal-arena></signal-arena>
    </el-tab-pane>
  </el-tabs>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import Global from "@/components/layout/Global"


import MyStrategist from '@/components/views/SignalArena/MyStrategist'
import SignalArena from '@/components/views/SignalArena/SignalArena'


export default {
	components: {
		NavBar,
		FooterBar,
		MyStrategist,
      SignalArena
	},

	data() {
		return {
			activeName: 'first',
			SignalArenaMenu: Global.getPageMenu("SignalArena"),	
		};	
	},

	methods: {
      gotoSignalDevelopPage(){

      }
	},

}
</script>

<style lang="scss">
	#signal-arena {
		.main {
		
		}

		.signal-banner {
	        background-color: #171F27;      
	    .banner{
	        background: url("/static/SignalArena/icon_banner.png") no-repeat center center;    
	        text-align: center;
	        color: white;
	        height: 340px;
	        vertical-align: middle;
	      }
	  }
	    .signal-arena-banner-button {
			display: inline-block;
			height: 46px;
			width: 172px;
			font-size: 18px;
			text-align: center;
			vertical-align: middle;
			border-radius: 23px;
			color: white;
			line-height: 46px;
			cursor: pointer;
			}
		.AI-nav-menu {
			background-color: white;

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
		.arenaTab .el-tabs__item {
			font-size: 16px;
			margin:20px 0px 0px 0px;
			color: #666666;
			border: 1px;
		}
		.arenaTab .el-tabs__active-bar{
			height: 0px;
		}
		.arenaTab .el-tabs__nav-wrap{
			display: table;
			margin-left:20%;
		}
		.arenaTab .el-tabs__item.is-active{
			color: #ffffff;
    		background-color: #20a0ff;
    		border-radius: 5px;
		}
		.arenaTab .el-tabs__header{
			border-bottom:none;
		}
}
</style>