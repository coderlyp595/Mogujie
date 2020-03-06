<template>
	<div class="goods01">
		<goods-list-item v-for="item in goods" :goodsItem="item" :key="item.image"/>
	</div>
</template>

<script>
	import GoodsListItem from '../goods/GoodsListItem'
	export default {
		name:'GoodsList',
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.goods01{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
		padding: 0 4px;
	}
</style>
