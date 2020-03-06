<template>
	<div>
		<div v-if="Object.keys(shop).length !== 0" class="yu">
			<!-- 商家头像 名称 -->
			<div class="shop-logo-name">
				<img :src="shop.logo" alt="" style="border-radius: 50%;">
				<div class="shop-name">{{shop.name}}</div>
			</div>
			<div class="xiaoliang">
				<div class="shop-left">
					<div>
						<span class="font">{{shop.fans}}</span><br>
						<span class="font-size">总销量</span>
					</div>
					<div style="margin-left: 10px;">
						<span class="font">{{shop.goodsCount}}</span><br>
						<span class="font-size">全部宝贝</span>
					</div>
				</div>
				<div class="shop-right">
					<div class="text">
						<span style="margin-left: 30px;">{{shop.score[0].name}}</span>
						<span class="mm">{{shop.score[0].score}}</span>
						<span :class="{active:shop.score[1].isBetter = true}" class="color">低</span>
					</div>
					<div class="text">
						<span style="margin-left: 30px;">{{shop.score[1].name}}</span>
						<span class="mm">{{shop.score[1].score}}</span>
						<span :class="{active:shop.score[1].isBetter = true}" class="color">高</span>
					</div>
					<div class="text">
						<span style="margin-left: 30px;">{{shop.score[2].name}}</span>
						<span class="mm">{{shop.score[2].score}}</span>
						<span :class="{active:shop.score[1].isBetter = true}" class="color" >低</span>
					</div>
				</div>
			</div>
			<div class="shop-title">
				<p>进店铺逛一逛</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'detailshopinfo',
		props:{
			shop:{
				type:Object
			}
		}
	}
</script>

<style scoped>
	.yu{
		padding-bottom: 20px;
		border-bottom: 4px solid #F6F6F6;
	}
	
	.shop-title p{
		background: #eee;
		color: #000;
		padding: 5px 20px;
		width: 100px;
		border-radius: 40px;
		margin:  20px auto;
		font-size: 14px;
	}
	
	.shop-title{
		text-align: center;
	}
	
	.mm{
		margin-left: 5px;
	}
	
	.shop-logo-name{
		display: flex;
		align-items: center;
		height: 80px;
		padding-left: 20px;
	}
	
	.shop-logo-name img{
		width: 50px;
		height: 50px;
	}
	
	.shop-name{
		margin-left: 8px;
		font-size: 15px;
	}
	
	.shop-left{
		display: flex;
		text-align: center;
		padding: 30px 5px;
		border-right: 1px solid #F6F6F6;
		width: 50%;
		box-sizing: border-box;
		padding-left: 25px;
	}
	
	.font{
		font-weight: bold;
	}
	
	.font-size{
		font-size: 12px;
	}
	
	.xiaoliang{
		display: flex;
		height: 95px;
	}
	
	.shop-right{
		font-size: 12px;
		box-sizing: border-box;
		padding-top: 5px;
	}
	
	.text{
		display: flex;
		justify-content: space-between;
		line-height: 30px;
		align-items: center;
	}
	
	.text .color{
		color: #fff;
		background: green;
		height: 18px;
		text-align: center;
		line-height: 20px;
		width: 18px;
		display: block;
		margin-left: 8px;
	}
	
	.active{
		color: red;
	}
</style>
