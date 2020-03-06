<template>
	<div id="detail">
		<!-- 顶部导航 -->
		<datail-nav-bar class="detail-l" @titleClick="titleClick" ref="nav"/>
		<scroll class="content" ref='scroll' @scroll="commonScroll" :probe-type="3">
			<!-- 轮播图 -->
			<detail-swiper :top-images="topImages"/>
			<!-- 商品信息 -->
			<xinxi :goods='goods'/>
			<!-- 商家信息 -->
			<detailshopinfo :shop="shop" />
			<!-- 展示的具体图片 -->
			<detail-goods-info :goods-info="goodsInfo" @imgLoad="imgLoad"/>
			<!-- 身高商品大小展示 -->
			<Detailrule ref="param" :goods-param="goodsparam" />
			<!-- 买家评论 -->
			<detail-common-info ref="pinglun" :xinxi="pinglun" />
			<!-- 推荐信息展示 -->
			<goods-list ref="goods" :goods='recommends' />
		</scroll>
		
		<!-- 底部工具栏 -->
		<detail-bottom-bar @cunClick="cunClick"/>
		<back-top @click.native="backClick" v-show="isShowBackTop"/>
	</div>
</template>

<script>
	import DatailNavBar from './chilidComps/DatailNavBar'
	import DetailSwiper from './chilidComps/DetailSwiper'
	import detailshopinfo from './chilidComps/detailshopinfo'
	import DetailGoodsInfo from './chilidComps/DetailGoodsInfo'
	import Detailrule from './chilidComps/Detailrule'
	import Scroll from 'components/common/scroll/Scroll'
	import xinxi from './chilidComps/xinxi'
	import DetailCommonInfo from './chilidComps/DetailCommonInfo'
	import GoodsList from 'components/content/goods/GoodsList'
	import {debounce} from 'common/utils'
	import DetailBottomBar from './chilidComps/DetailBottomBar'
	import {backTopMixin} from 'common/mixin'
	
	import { getDetail,Goods,Shop,GoodsParam, getRecommend} from 'network/detail'
	export default {
		name:'Detail',
		components:{
			DatailNavBar,
			DetailSwiper,
			xinxi,
			detailshopinfo,
			Scroll,
			DetailGoodsInfo,
			Detailrule,
			DetailCommonInfo,
			GoodsList,
			DetailBottomBar,
		},
		mixins:[backTopMixin],
		data() {
			return{
				iid:null,
				topImages:[],
				goods:{},
				shop:{},
				goodsInfo:{},
				goodsparam:{},
				pinglun:{},
				recommends:[],
				themeTopYs:[],
				getThemeTopY:null,
				currentIndex:0
			}
		},
		updated() {
			
		},
		created() {
			//1.保存传入的iid
			this.iid =  this.$route.params.iid
			
			//2.根据iid请求详情数据
			getDetail(this.iid).then(res => {
				const data = res.data.result
				//获取轮播图数据
				this.topImages = data.itemInfo.topImages
				this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				this.shop = new Shop(data.shopInfo)
				this.goodsInfo = data.detailInfo
				this.goodsparam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
				//有时候获取不到数据报错
				this.pinglun = data.rate.list[0]
				
				
				this.getThemeTopY = debounce( () => {
					// this.$nextTick(() => {
						this.themeTopYs = []
						this.themeTopYs.push(0);
						this.themeTopYs.push(this.$refs.param.$el.offsetTop);
						this.themeTopYs.push(this.$refs.pinglun.$el.offsetTop);
						this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
						this.themeTopYs.push(Number.MAX_VALUE)
					// })
				})
			})
			
			//请求推荐数据
			getRecommend().then(res => {
				this.recommends = res.data.data.list
			})
		},
		mounted() {
			
		},
		methods:{
			cunClick() {
				//定义空数组储存商品基本信息
				const product = {}
				//获取商品基本信息放入数组中
				product.img = this.topImages[0];
				product.iid = this.iid;
				product.title = this.goods.title;
				product.desc = this.goodsInfo.desc;
				product.price = this.goods.lowNowPrice;
				//将商品添加到购物车
				// this.$store.cartList.push(product)
				// this.$store.commit('addCart',product)
				this.$store.dispatch('addCart',product).then(res => {
					//封装好的插件弹窗
					this.$toast.show(res,2000)
				})
			},
			imgLoad() {
				this.$refs.scroll.refresh()
				this.getThemeTopY()
			},
			//点击获取对应组件的offsetTop值
			titleClick(index) {
				this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
			},
			commonScroll(position){
				this.listenShowBackTop(position)
				//那到position里面的y值保存
				const positionY = -position.y
				//保存一下自己push的长度
				let length = this.themeTopYs.length
				for(let i = 0; i < length-1; i++){
					if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
						this.currentIndex = i;
						this.$refs.nav.cunIndex = this.currentIndex
					}
				}
			}
		}
		
	}
</script>

<style scoped>
	.detail-l{
		position: relative;
		z-index: 9;
		background: #fff;
	}
	
	#detail{
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}
	
	.content{
		height: calc(100% - 93px);
		overflow: hidden;
	}
</style>
