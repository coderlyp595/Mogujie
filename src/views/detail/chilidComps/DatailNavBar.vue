<template>
	<div>
		<nav-bar>
			<div slot="left" @click="backClick" class="left">
				<img src="~assets/img/home/fh.png" alt="">
			</div>
			<div slot="center" class="titles">
				<div 
				class="titlesItem" 
				v-for="(item,index) in titles" 
				:key='item'
				@click="itemClick(index)"
				:class="{active:index === cunIndex}">{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar'
	
	export default {
		name:'DatailNavBar',
		data() {
			return{
				titles:['商品','参数','评论','推荐'],
				cunIndex:0
			}
		},
		components:{
			NavBar
		},
		methods:{
			itemClick(index) {
				this.cunIndex = index
				this.$emit('titleClick',index)
			},
			backClick() {
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.titles{
		display: flex;
	}
	
	.titlesItem{
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	
	.active{
		color: var(--color-high-text);
	}
	
	.left{
		padding-top: 2px;
	}
</style>
