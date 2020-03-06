<template>
  <div class="home">
	<!-- 导航栏 -->
	<nav-bar class="home-navbar"><div slot='center'>蘑菇头</div></nav-bar>
		<tab-control :titles="['流行','新款','精选']"
						@tabClick="tabClick" 
						class="xiding" v-show="IsTabFixed"
						ref="toptabcontrol"/>
	<!-- 滚动区域的内容 -->
	<scroll class="content" 
		ref='scroll' 
		:probe-type="3" 
		@scroll="contentScroll" 
		:pull-up-load="true" @pullingUp="loadMore">
		<!-- 轮播图 -->
		<home-swiper :banners="banners" @swiperImageLoad="swiperimageload"/>
		<!-- 图片区 -->
		<recommend-view :recommends="recommends"/>
		<!-- 推荐 -->
		<faetuer-view/>
		<!-- 选项卡 -->
		<tab-control :titles="['流行','新款','精选']"
						@tabClick="tabClick" 
						ref="tabcontrol"/>
		<!-- 展示的商品列表 -->
		<goods-list :goods="showGoods" />
	</scroll>
	<back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import TabControl from '../../components/content/tabControl/Tabcontrol'
  import navBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FaetuerView from './childComps/FeatuerView'
  import {getHomeMultidata,getHomeGoods} from "network/home"
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  
  //导入混入队对象
  import {backTopMixin} from 'common/mixin'
  
  import { debounce } from'common/utils.js'
export default {
    name: 'Home',
	components:{
		navBar,
		HomeSwiper,
		RecommendView,
		FaetuerView,
		TabControl,
		GoodsList,
		Scroll
	},
	mixins:[backTopMixin],
	data() {
		return{
			banners:[],
			recommends:[],
			goods: {
				'pop': {page:0, list:[]},
				'new': {page:0, list:[]},
				'sell': {page:0, list:[]}
			},
			currentType:'pop',
			tabOffsetTop:0,
			IsTabFixed:false,
			scrollY:0
		}
	},
	activated() {	
		this.$refs.scroll.scrollTo(0 ,this.scrollY,0)
		this.$refs.scroll.refresh()
	},
	deactivated() {
		this.scrollY = this.$refs.scroll.getScrollY()
	},
	//组件销毁后
	destroyed() {
		console.log("---")
	},
	// 组件创建完成之后
	created() {
	// 请求多个数据
		this.getHomeMultidata()
	// 请求商品数据
		this.getHomeGoods('pop')
		this.getHomeGoods('new')
		this.getHomeGoods('sell')
	},
	/**
	 * 计算属性
	 */
	computed:{
		showGoods() {
			return this.goods[this.currentType].list
		}
	},
	mounted() {
		//监听图片加载完成  /** 调用函数传参debounce **/  /** 防抖函数 debounce   节流函数throttel  js部分的**/
		const refresh = debounce(this.$refs.scroll.refresh, 50)
		this.$bus.$on('itemImageLoad', () => {
			refresh()
		})
		
		//获取tabConteol的offsetTop
		//所有的组件都有一个属性$el;用于获取组件的元素
		
	},
	methods:{
		/**
		 * 事件监听相关的方法
		 */
		tabClick(index) {
			switch(index) {
				case 0:
				this.currentType = 'pop'
				break
				case 1:
				this.currentType = 'new'
				break
				case 2:
				this.currentType = 'sell'
				break
			}
			this.$refs.toptabcontrol.currentIndex = index
			this.$refs.tabcontrol.currentIndex = index
		},
		
		contentScroll(position) {
			//1.判断BackTop是否显示
			this.listenShowBackTop(position)
			//2.决定tabcontrol是否吸顶(position: fixed)
			this.IsTabFixed = (-position.y) > this.tabOffsetTop
		},
		
		loadMore() {
			this.getHomeGoods(this.currentType)
		},

		swiperimageload() {
			this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop
		},
		
		/**
		 * 网络请求的相关方法
		 */
		getHomeMultidata() {
			getHomeMultidata().then(res => {
				this.banners = res.data.data.banner.list;
				this.recommends = res.data.data.recommend.list;
			})
		},
		getHomeGoods(type) {
			const page = this.goods[type].page + 1
			getHomeGoods(type,page).then(res => {
				this.goods[type].list.push(...res.data.data.list)
				this.goods[type].page += 1
				this.$refs.scroll.finishPullUp()
			})
		}
	}
}
</script>
<style scoped>
  .home-navbar{
	background-color: var(--color-tint);
	color: #fff;
  }
  
  .home{
	height: 100vh;
	position: relative;
  }
  
  .content{
	overflow: hidden;
	position: absolute;
	top: 44px;
	bottom: 49px;
	left: 0;
	right: 0;
  }
  
 .xiding{
	position: relative;
	z-index: 10;
  }
  
  .fixed {
	position: fixed;
	left: 0;
	right: 0;
	top: 44px;
  }
</style>