<template>
	<view class="page page-fill">
		
		<form @submit="formSubmitNickname">
			
			<view class="page-block" style="margin-top: 20upx;">
				<input 
					type="text"
					name="nickname"
					:value="globalUser.nickname" 
					class="input"
					placeholder="请输入昵称"
					placeholder-class="graywords"
					maxlength="10"
					/>
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
			
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				globalUser: {}
			};
		},
		onLoad() {
			var me = this;
			var globalUser = uni.getStorageSync("globalUser");
			me.globalUser = globalUser;
		},
		methods: {
			formSubmitNickname(e) {
				var me = this;
				var nickname = e.detail.value.nickname;
				
				uni.request({
					url: "http://10.22.52.250:8000/user/updatainfo",
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					data: {
						"id": me.globalUser[0].id,
						"name": nickname
					},
					method: "POST",
					success(res) {
						var resData = res.data;
						console.log(resData);
						console.log(me.globalUser[0].id);
						// console.log(typeof(resData));
// 						if (resData.status == 200) {
// 							// 获得最新的用户数据
							var userInfo = resData.data;
							uni.setStorageSync("globalUser", userInfo);
							uni.navigateBack({
								delta: 1
							})
// 						} else if (resData.status == 502 || resData.status == 500) {
// 							uni.showToast({
// 								title: res.data.msg,
// 								image: "../../static/icos/error.png",
// 								duration: 2000
// 							})
// 						}
					}
				})
			}
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
}

.graywords {
	color: #EAEAEA;
}

.input {
	height: 80upx;
	line-height: 80upx;
	width: 500upx;
	margin-left: 40upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>
