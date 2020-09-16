<template>
	<div id="AI-advisor">
		<nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

		<div class="main">
			<router-view></router-view>
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
	mounted() {
		document.body.style.overflow = "auto";
	},
	data() {
		return {
			AIadvisorMenu: Global.getPageMenu("AISignalAnalysis")
		}
	}
}
</script>

<style lang="scss">
	#AI-advisor {
		.main {
			background-color: white;
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
	}
</style>