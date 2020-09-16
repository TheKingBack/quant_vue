<template>
	<div class="header">
		<div class="quant-menu">
			<div class="quant-menu-logo-wrapper">
				<img class="quant-menu-logo" @click="GoHome" :src="logoImage">
			</div>
			<div class="quant-menu-items">
				<ul>
					<li class="menu" v-for="item in navMenuItems">
						<router-link class="quant-menu-item" v-if="item.show && item.id !== 'Community'" :to="item.link" :target="item.Target" v-text="item.title" :class="{'quant-menu-selected': item.selected}"></router-link>
						<a class="quant-menu-item" v-if="item.show && item.id === 'Community'" :href="item.link" :target="item.Target" v-text="item.title"></a>
						<template v-if="item.subMenus && item.subMenus.length">

							<ul class="sub-menu" index="2">
								<li v-for="subItem in item.subMenus">
									<router-link :class="subItem.Class" :to="subItem.link" v-text="subItem.title"></router-link>
								</li>
							</ul>
							
						</template>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import Global from "@/components/layout/Global"

export default {
	data() {
		return {
			logoImage: "/static/logo.png",
			isLogedin: Global.isLogedin()
		}
	},
	props: ['navMenuItems'],
	methods:{

		//前往首页
		GoHome(){
			this.$router.push("/");
		},

		LoginOut:function(){
			var that = this;
			$(".loginOut").on("click",function(event){
				console.log(1)
			event.preventDefault();//使a自带的方法失效，即无法调整到href中的URL(http://www.baidu.com)
			that.$http.post(Global.getRequestUrl() + "/user/logout",
			{
				token:Global.getCookie("token")
			},
			{
				headers: Global.getRequestHeader()
			}
			).then(function(resp) {
				resp = resp.body;
				console.log(resp);
				if(resp.success) {
					console.log("我是注销!");
					Global.ClearCookie();
					alert("退出成功！");
					that.$router.push("/");
					window.location.reload(true);
				}else {
					Global.IsToken();
					console.error("退出失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
			console.error("退出请求失败");
			console.error(error);
			});
		});
		}
	},
	mounted() {
		this.$nextTick(function() {
			this.LoginOut();
    	});
	}
}
</script>

<style lang="scss">
	.header{
		font-size: 16px;
		padding: 0 30px;
		// padding-left: 200px;
		// padding-right: 50px;
		background-color: #111C28;
		box-sizing: border-box;

		.quant-menu {
			// width: 1300px;
			height: 62px;
			margin: 0 auto;
		}

		.quant-menu-logo-wrapper {
			display: inline-block;
			float: left;
		}

		.quant-menu-logo {
			padding-top: 11px;
			cursor: pointer;
		}

		.quant-menu-items {
			color: white;
			display: inline-block;
			float: right;

			.quant-menu-item {
				display: inline-block;
				height: 62px;
				line-height: 62px;
				padding: 0px 15px;
			}

			ul {
				padding: 0px;
				margin: 0px;
			}

			ul li.menu{
				float: left;
				list-style: none;
				cursor: pointer;

				ul {
					display: none;
					position: absolute;
					background-color: #192939;
					/*// 李庚鑫还更改了这里*/
					z-index: 999;
					
					li {
						float: none;
						list-style: none;
						cursor: pointer;
						padding: 10px;
					}
				}

				a:hover, span:hover {
					opacity: 0.5;

					
				}

				&:hover ul{
					display: block;
				}

				a {
					text-decoration: none;
					color: white;
				}

				.quant-menu-selected {
					opacity: 0.5
				}
			}
		}
		
	}
</style>