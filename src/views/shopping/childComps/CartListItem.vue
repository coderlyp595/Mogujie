<template>
	<div class="shopping">
		<div style="display: flex; align-items: center;">
			<back-button @click.native="checkClick" class="button" :is-checked="list.checked"/>
		</div>
		<div class="img">
			<img :src="list.img" alt="">
		</div>
		<div class="xiangqing">
			<div class="title" style="margin-top: 3px;">{{list.title}}</div>
			<div class="title" style="font-size: 12px;margin-top: 20px;">{{list.desc}}</div>
			<div class="price">
				<span>￥{{list.price}}</span>
				<span>x{{list.count}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import BackButton from './BackButton'
	export default {
		name:'CartListItem',
		props: {
			list:{
				type:Object,
				default() {
					return {}
				}
			}
		},
		components:{
			BackButton
		},
		methods:{
			checkClick() {
				this.list.checked = !this.list.checked
			}
		}
	}
</script>

<style scoped>
	.img{
		margin-left: 8px;
	}
	
	.img img{
		width: 80px;
		height: 90px;
	}
	
	.shopping{
		display: flex;
		padding-top: 8px;
		padding-bottom: 8px;
		padding-right: 8px;
		padding-left: 5px;
		border-bottom: 2px solid #F6F6F6;
	}
	
	.title{
		font-size: 16px;
		white-space: nowrap;      /*超出的空白区域不换行*/
		overflow: hidden;         /*超出隐藏*/
		text-overflow: ellipsis;  /*文本超出显示省略号*/
		margin-left: 10px;
		width: 190px;
	}
	
	.price{
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
</style>
