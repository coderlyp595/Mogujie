<template>
	<div class="bottom-bar">
		<div class="left">
			<div>
				<img src="~assets/img/detail/01.svg" alt="">
				<div>客服</div>
			</div>
			<div>
				<img src="~assets/img/detail/02.svg" alt="">
				<div>店铺</div>
			</div>
			<div>
				<img src="~assets/img/detail/03.svg" alt="">
				<div>收藏</div>
			</div>
		</div>
		<div class="right">
			<div class="jiaru" @click="click">加入购物车</div>
			<div class="goumai">购买</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailBottomBar',
		methods:{
			click() {
				this.$emit('cunClick')
			}
		}
	}
</script>

<style scoped>
	.bottom-bar{
		background-color: #fff;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 49px;
		display: flex;
		align-items: center;
	}
	
	.left{
		width: 50%;
		display: flex;
		font-size: 14px;
		text-align: center;
	}
	
	.left>div img{
		width: 24px;
		height: 24px;
	}
	
	.left>div{
		flex: 1;
	}
	
	.right{
		width: 50%;
		display: flex;
		line-height: 49px;
		font-size: 14px;
	}
	
	.right>div{
		flex: 1;
		text-align: center;
	}
	
	.jiaru{
		background-color: yellow;
		height: 49px;
	}
	
	.goumai{
		background-color: #FF5777;
		height: 49px;
		color: #fff;
	}
</style>
