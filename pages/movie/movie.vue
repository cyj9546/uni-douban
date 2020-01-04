<template>
	<view class="page">
		
		<!-- 视频播放 start -->
		<view class="player">
			
			<video 
				v-for="trailer in trailerInfo"
				id="myTrailer"
				:src="trailer.video_url" 
				:poster="trailer.poster" 
				class="movie"
				controls></video>
		</view>
		<!-- 视频播放 end -->
		
		<!-- 影片基本信息 start -->
		<view class="movie-info" v-for="trailer in trailerInfo">
			<navigator :url="'../cover/cover?cover=' + trailer.cover">
				<image 
					:src="trailer.image_url" 
					class="cover"></image>
			</navigator>
			
			<view class="movie-desc">
				<view class="title">{{trailer.title}}</view>
				<view class="basic-info">{{trailer.actor}}</view>
				<view class="basic-info">{{trailer.type}}</view>
				<view class="basic-info">{{trailer.time}}</view>
				<view class="basic-info">{{trailer.date}}</view>
				
				<view class="score-block">
					
					<view class="big-score">
						<view class="score-words">综合评分：</view>
						<view class="movie-score">{{trailer.scoe}}</view>
					</view>
					
					<view class="score-stars">
						<block v-if="trailer.scoe >= 0">
							<moviestar :innerScore="trailer.scoe" showNum="0"></moviestar>
						</block>
						
						<view class="prise-counts">
							{{trailer.number}}  人评论
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<!-- 影片基本信息 end -->
		
		<view class="line-wapper">
			<view class="line"></view>
		</view>
		
		<!-- 剧情介绍 start -->
		<view class="plots-block" v-for="trailer in trailerInfo">
			<view class="plots-title">剧情介绍</view>
			<view class="plots-desc">{{trailer.content}}</view>
		</view>
		<!-- 剧情介绍 end -->
		
		
	
		
	</view>
</template>

<script>
	import moviestar from "../../components/moviestar.vue";
	import common from "../../common/common.js";
	export default {
		data() {
			return {
				trailerInfo: {},
				plotPicsArray: [],	// 剧照
				directorArray: [],	// 导演列表
				actorArray: []		// 演员列表
			};
		},
		// 页面初次渲染完成，获得视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer');
		},
		onHide() {
			// 页面被隐藏的时候，暂停播放
			this.videoContext.pause();
		},
		onShow() {
			// 页面被再次显示的时候，可以继续播放
// 			if (this.videoContext) {
// 				this.videoContext.play();
// 			}
		},
		onLoad(params) {
			var me = this;
			// 获取上一个页面传入的参数
			var trailerId = params.trailerId;
			console.log(trailerId);
			// 通过api修改导航栏的属性
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#000000"
			});
			
			// 获取预告片的详细信息
			var serverUrl=common.serverUrl;
			uni.request({
				url: 'http://10.22.52.250:8000/movie/movie_detail',
				method: "POST",
						header:{
							'content-type':'application/x-www-form-urlencoded'
						},
						data: {
							"id": trailerId,
						},
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
						console.log(res.data);
						var trailerInfo = res.data;
						this.trailerInfo = trailerInfo;
						
						// 把剧照的字符串转换为json array
						
						// debugger;
					}
				});
			// 获取导演
			uni.request({
				url: serverUrl + '/search/staff/' + trailerId + '/1',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'466481615'
				},
				success: (res) => {
					
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						me.directorArray = res.data.data;
						// debugger;
					}
				}
			});
			// 获取获取演员
			uni.request({
				url: serverUrl + '/search/staff/' + trailerId + '/2',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				data:{
					qq:'466481615'
				},
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
					if (res.data.status == 200) {
						me.actorArray = res.data.data;
						// debugger;
					}
				}
			});
		},
		// 此函数仅仅只支持在小程序端的分享，分享到微信群或者微信好友
		onShareAppMessage(res) {
			var me = this;
			return {
			  title: me.trailerInfo.name,
			  path: '/pages/movie/movie?trailerId=' + me.trailerInfo.id
			}
		},
		// 监听导航栏的按钮
		onNavigationBarButtonTap(e) {
			var index = e.index;
			// console.log(index);
			var me = this;
			var trailerInfo = me.trailerInfo;
			var trailerId = trailerInfo.id;
			var trailerName = trailerInfo.name;
			var cover = trailerInfo.cover;
			var poster = trailerInfo.poster;
			
			// index 为0 则分享
			if (index == 0) {
				uni.share({
					provider: "weixin",
					scene: "WXSenceTimeline",
					type: 0,
					href: "http://www.imovietrailer.com/#/pages/movie/movie?trailerId=" + trailerId,
					title: "NEXT超英预告：《" + trailerName + "》",
					summary: "NEXT超英预告：《" + trailerName + "》",
					imageUrl: cover,
					success: function (res) {
						console.log("success:" + JSON.stringify(res));
					}
				});
			}
		},
		methods: {
			lookMe(e) {
				var me = this;
				var imgIndex = e.currentTarget.dataset.imgindex;
				
				uni.previewImage({
					current: me.plotPicsArray[imgIndex],
					urls: me.plotPicsArray
				})
			},
			lookStaffs(e) {
				var me = this;
				var staffIndex = e.currentTarget.dataset.staffindex;
				
				// 拼接导演和演员的数组，成为一个新数组
				var directorArray = me.directorArray;
				var actorArray = me.actorArray;
				var newStaffArray = [];
				newStaffArray = newStaffArray.concat(directorArray).concat(actorArray);
				
				var urls = [];
				for (var i = 0; i < newStaffArray.length ; i ++) {
					var tempPhoto = newStaffArray[i].photo;
					urls.push(tempPhoto);
				}
				
				uni.previewImage({
					current: urls[staffIndex],
					urls: urls
				})
			}
		},
		
		components: {
			moviestar
		}
	}
</script>

<style>
	@import url("movie.css");
</style>
