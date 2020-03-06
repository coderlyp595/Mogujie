<template>
	<div class="goods" @click="itemClick">
		<div class="img"><img v-lazy="showImage" alt="" @load="imageLoad"></div>
		<div class="position">
			<p>{{goodsItem.title}}</p>
			<div class="goods-info">
				<span class="price">{{goodsItem.price}}</span>
				<img src="~assets/img/home/xing.png" alt="">
				<span class="cfav">{{goodsItem.cfav}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'GoodsListItem',
		props:{
			goodsItem: {
				type:Object,
				default() {
					return {}
				}
			}
		},
		methods:{
			imageLoad() {
				this.$bus.$emit('itemImageLoad')
			},
			itemClick() {
				this.$router.push('/detail/' + this.goodsItem.iid)
			}
		},
		computed:{
			showImage() {
				return this.goodsItem.image || this.goodsItem.show.img
			}
		}
	}
</script>

<style>
	.goods{
		width: 48%;
		border-radius: 8px;
		text-align: center;
		margin-bottom: 5px;
	}
	
	.goods p{
		font-size: 12px;
		white-space: nowrap;      /*超出的空白区域不换行*/
		overflow: hidden;         /*超出隐藏*/
		text-overflow: ellipsis;  /*文本超出显示省略号*/
		margin: 0 ;
		padding: 0 2px;
		margin-top: 5px;
	}
	.img img{
		width: 100%;
		border-radius: 8px;
		height: 224.63px;
	}
	
	.img{
		width: 100%;
	}
	
	.price{
		color: pink;
		font-size: 12px;
		height: 12px;
		line-height: 12px;
	}
	
	.cfav{
		color: #666666;
		font-size: 13px;
		height: 13px;
	}
	
	.goods-info{
		display: flex;
		justify-content: center;
		text-align: center;
		line-height: 13px;
		height: 13px;
		width: 100%;
		align-items: center;
		margin-top: 3px;
	}
	
	.goods-info img{
		width: 12px;
		height: 12px;
	}
	
	
</style>
