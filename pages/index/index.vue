<template>
	<view class="page">
		<swiper :indicator-dots="true" :autoplay="true" interval="3000">
			<swiper-item v-for="carouse in carouselList">
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + carouse.id">
				<image :src="carouse.img" class="caroul"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="page-block movice-hot">
			<view class="hot-title-wapper">
				<image src="../../static/hot.png" class="hot-ico"></image>
				<view class="hot-title">
					热门电影
				</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block scroll-hot">
			<view class="single-poster" v-for="hotMovie in hotMovieList">
				<view class="poster-wapper">
					<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + hotMovie.id">
					<image :src="hotMovie.cover" class="poster"></image>
					</navigator>
					<view class="movice-name">
						{{hotMovie.title}}
					</view>  
					<moviestar :innerScore="hotMovie.score" showNum="1"></moviestar>
				</view>
			</view>
		</scroll-view>
		<view class="page-block movice-hot">
			<view class="hot-title-wapper">
				<image src="../../static/jijiang.png" class="hot-ico"></image>
				<view class="hot-title">
					电影预告
				</view>
			</view>
		</view>
		<view class="hot-movies page-block">
			<video 
			:id="Trailer.id"
			@play="meIsPlaying"
			:data-playingindex="Trailer.id"
			v-for="Trailer in hotTrailerList" 
			:src="Trailer.trailer" 
			:poster="Trailer.poster" 
			class="hot-movie-single" 
			controls>
				
			</video>
		</view>
		<view class="page-block movice-hot">
			<view class="hot-title-wapper">
				<image src="../../static/guess-u-like.png" class="hot-ico"></image>
				<view class="hot-title">
					猜你喜欢
				</view>
			</view>
		</view>
		<view class="page-block guess-u-like" >
			<view class="single-like-movie" v-for="(guess,gIndex) in guessULikeList "  >
				<navigator open-type="navigate" :url="'../movie/movie?trailerId=' + guess.id">
				<image :src="guess.image_url" class="like-movie"></image>
				</navigator>
				<view class="movie-desc">   
					<view class="movie-title">
						{{guess.title}}
					</view>
					<moviestar innerScore="9.1" showNum="0"></moviestar>
					<view class="movie-info">
						{{guess.type}}
					</view>
					<view class="movie-info">
						{{guess.date}}
					</view>
				</view>
				
				<view class="movie-oper" :data-gIndex="gIndex" @click="praiseMe">
					<image src="../../static/praise.png" class="praise-ico"></image>
					<view class="praise-me">
							点赞
					</view>
					<view :animation="animationDataArr[gIndex]" class="praise-me animation-opacity">
							+1
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
  
<script>
	import common from "../../common/common.js";
	import moviestar from "../../components/moviestar.vue";
	export default {
		data() {
			return {
				carouselList:[],
				hotMovieList:[],
				hotTrailerList:[],
				guessULikeList: [],
				animationData:{},
				animationDataArr:[
					{},{},{},{},{}
				]
				
			}
		},
		onUnload() {
			this.animationData={};
			animationDataArr:[
				{},{},{},{},{}
			];
		},
		onPullDownRefresh() {
			this.refresh();
		},
		onHide() {
			if (this.videoContext) {
				this.videoContext.pause();
			}
		},
		onLoad() { 
				// #ifdef APP-PLUS || MP-WEIXIN
			// 在页面创建的时候，创建一个临时动画对象
			this.animation = uni.createAnimation();
			// #endif
			var serverUrl="http://10.22.52.250:8000/movie/lunbo";
			uni.request({
				url: serverUrl, 
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				method:'POST',
				success: (res) => {
					console.log(res.data);
						var carouselList=res.data;
						this.carouselList=carouselList;
					
				
				}
			});
			uni.request({
				url:"http://10.22.52.250:8000/movie/hotmovielist", 
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				method:'POST',
				success: (res) => {
					console.log(res.data);
						var hotMovieList=res.data;
						this.hotMovieList=hotMovieList;
					
				    
				}
			});
			
			// 查询热门预告
			uni.request({
				url:'http://10.22.52.250:8000/movie/movienotice/',
				method: "POST",
				header:{
					'content-type':'application/x-www-form-urlencoded'
				},
				success: (res) => {
					// 获取真实数据之前，务必判断状态是否为200
						console.log(res.data);
						var hotTrailerList = res.data;
						this.hotTrailerList = hotTrailerList;
			
				}
			});
			
			this.refresh();
		},
		
		methods: {
			// 播放一个视频的时候，需要暂停其他正在播放的视频
			meIsPlaying(e) {
				var me = this;
				var trailerId = "";
				if (e) {
					trailerId = e.currentTarget.dataset.playingindex;
					me.videoContext = uni.createVideoContext(trailerId);
				}
				var hotTrailerList = me.hotTrailerList;
				for (var i = 0; i < hotTrailerList.length ; i ++) {
					var tempId = hotTrailerList[i].id;
					if (tempId != trailerId) {
						uni.createVideoContext(tempId).pause();
					}
				}
			},
			refresh() {
				uni.showLoading({
					mask:true
				});
				var serverUrl = common.serverUrl;
				uni.request({
					url: 'http://10.22.52.250:8000/movie/guesslike/',
					header:{
						'content-type':'application/x-www-form-urlencoded'
					},
					method:'POST',
					success: (res) => {
						console.log(res.data);
							var guessULikeList = res.data;
							this.guessULikeList = guessULikeList;
							console.log(res.data.image_url);
					  
					},
					complete: () => {
						uni.hideLoading();
						uni.stopPullDownRefresh();
					}
				});
			},
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
		},
		components:{
			moviestar
		}
	}
	
</script>

<style>
	@import url("index.css");
</style>
