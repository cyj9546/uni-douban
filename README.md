# 豆瓣电影预告

前端:uni-app

后端:express+mysql

功能介绍:首页轮播，热门电影，电影预报，电影详情页面展示，视频播放，头像上传，微信授权登录功能

其他:

点赞功能:

```
			praiseMe(e) {
				// #ifdef APP-PLUS || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex;
				console.log(gIndex);
				// return;
				// 构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({
					duration: 400
				});
				
				// 导出动画数据到view组件，实现组件的动画效果
				// this.animationData = this.animation.export();
				this.animationData = this.animation;
				this.animationDataArr[gIndex] = this.animationData.export();
			
				// 还原动画
				setTimeout(function() {
					this.animation.translateY(0).opacity(0).step({
						duration: 0
					});
					this.animationData = this.animation;
					this.animationDataArr[gIndex] = this.animationData.export();
				}.bind(this), 500)
				// #endif
			}
```

头像上传:

前端

```
			uni.showActionSheet({
				itemList: ["查看我的头像", "从相册选择上传"],
				success(res) {
					var index = res.tapIndex; 
					if (index == 0) {
						// 预览头像
						var faceArr = [];
						faceArr.push(globalUser[0].faceImage);
						uni.previewImage({
							urls: faceArr,
							current: faceArr[0]
						})
					} else if (index == 1) {
						// 选择上传头像
						uni.chooseImage({
							count: 1,
							sizeType: ["compressed"],
							sourceType: ["album"],
							success(res) {
								// 获得临时路径
								var tempFilePath = res.tempFilePaths[0];
								// #ifdef H5
								uni.navigateTo({
									url: "../meFace/meFace?tempFilePath=" + tempFilePath
								})
								// #endif
								// #ifndef H5
								uni.navigateTo({
									url: "../faceCrop/faceCrop?tempFilePath=" + tempFilePath
								})
								// #endif
							}
						})
						
					}
				}
			})
```

微信授权登录

前端:

https://github.com/cyj9546/uni-douban/blob/master/screen/api-login.jpg

```
		wxLogin(e) {

			var me = this;
			 console.log(e);
			// 通过微信开发能力，获得微信用户的基本信息
			var userInfo = e.detail.userInfo;
			console.log(userInfo);
			// 实现微信登录
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
						console.log("code");
					console.log(loginRes.code);
						console.log("code");
					// 获取用户信息
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							console.log(infoRes.errMsg);
						}
					});
					uni.request({
						url: "http://localhost:8000/get_wx_access_token?code="+loginRes.code,
						data: {
							"avatarUrl": userInfo.avatarUrl,
							"nickName": userInfo.nickName
						},
						method: "POST",
						success(userResult) {
							console.log(userResult);
							var userInfo = userResult.data.data;
							// 保存用户信息到全局的缓存中
							uni.setStorageSync("globalUser", userInfo);
							// 切换页面跳转，使用tab切换的api
							uni.switchTab({
								url: "../me/me"
							});
						}
					});
				}
			});
		},
```



