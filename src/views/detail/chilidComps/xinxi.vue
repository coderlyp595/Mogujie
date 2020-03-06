<template>
	<div v-if="Object.keys(goods).length !== 0" class="box">
		<div class="title">{{goods.title}}</div>
		<div class="jiage">
			<span class="new">{{goods.newPrice}}</span>
			<span class="o-new"><s>{{goods.oldPrice}}</s></span>
			<span class="n-new" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="xiaoshou">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[2].name}}</span>
		</div>
		<div class="tuihuo">
			<span  v-for="index in goods.services.length-1" :key='index'>
				<img :src="goods.services[index-1].icon" alt="">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'xinxi',
		props:{
			goods:{
				type:Object,
			}
		}
	}
</script>

<style scoped>
	.box{
		padding: 8px 5px;
	}
	
	.title{
		text-align:justify;
	}
	
	.new{
		color: var(--color-high-text);
		font-size: 21px;
	}
	
	.o-new{
		font-size: 12px;
		margin-left: 5px;
	}
	
	.jiage{
		margin-top: 10px;
	}
	
	.n-new{
		background: var(--color-high-text);
		border-radius: 40px;
		color: #fff;
		padding: 3px 5px;
		font-size: 12px;
		margin-left: 5px;
		position: relative;
		top: -8px;
	}
	
	.xiaoshou{
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		color: #999;
		border-bottom: 1px solid #f6f6f6f6;
		padding: 3px;
	}
	
	.tuihuo{
		border-bottom: 3px solid #F6F6F6;
		height: 60px;
		justify-content: space-between;
		display: flex;
		align-items: center;
		font-size: 12px;
	}
	
	.tuihuo img{
		height: 15px;
		width: 15px;
		position: relative;
		top: -1px;
	}
	
	.tuihuo span{
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 15px;
		height: 15px;
	}
</style>
