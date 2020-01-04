<template>
	<view class="page page-fill">
		 
		<view class="header"  > 
			<view v-if="userIsLogin">
				<image :src="userInfo[0].faceImage" class="face"></image>
			</view>
			<view v-else>
				<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face"></image>
			</view>
			
			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">
					{{userInfo[0].name}}
				</view>
				<view class="nav-info">ID：{{userInfo[0].id}}</view>
			</view>
			<view v-else>
				<navigator url="../registLogin/registLogin">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>
			
			<view class="set-wapper" v-if="userIsLogin">
				<navigator url="../meInfo/meInfo">
					<image src="../../static/icos/settings.png" class="settings"></image>	
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			};
		},
		onShow() {
			var me = this;
			// 用户状态的切换
						var userInfo = uni.getStorageSync("globalUser");
						console.log(userInfo);
						if (userInfo != null && userInfo != "" && userInfo != undefined) {
							me.userIsLogin = true;
							me.userInfo = userInfo;
						} else {
							me.userIsLogin = false;
							me.userInfo = {};
						}
				
    
			// 使用挂载方法获取用户数据
// 			var userInfo = me.getGlobalUser("globalUser");
// 			if (userInfo != null) {
// 				me.userIsLogin = true;
// 				me.userInfo = userInfo;
// 			} else {
// 				me.userIsLogin = false;
// 				me.userInfo = {};
// 			}
		}
	}
</script>

<style>
	@import url("me.css");
</style>
