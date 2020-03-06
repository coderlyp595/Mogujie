<template>
	<div class="button-bar">
		<div class="quanxuan">
			<back-button @click.native="isClick" :isChecked="isSelectAll" class="name"/>
			<span>全选</span>
		</div>
		
		<div class="totalProce">
			总价:{{totalPrice}}
		</div>
		
		<div class="jisuan" @click="caleClick">
			去计算({{length}})
		</div>
	</div>
</template>

<script>
	import BackButton from './BackButton.vue'
	import { mapGetters} from 'vuex' 
	export default{
		name:'CartButtonBar',
		components:{
			BackButton
		},
		computed:{
			...mapGetters(['cartList']),
			totalPrice() {
				return "￥" + this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue, item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			length() {
				return this.cartList.filter(item => item.checked).length
			},
			isSelectAll() {
				if(this.cartList.length === 0) return false
				return !this.cartList.find(item => !item.checked)
			}
		},
		methods:{
			isClick() {
				if(this.isSelectAll) {
					this.cartList.forEach(item => item.checked = false)
				} else {
					this.cartList.forEach(item => item.checked = true)
				}
			},
			caleClick() {
				if(!this.isSelectAll) {
					this.$toast.show('至少选择一件商品',2000)
				}
			}
		}
	}
</script>
	
<style scoped>
	.button-bar{
		background: #eee;
		height: 40px;
		position: relative;
		display: flex;
		line-height: 40px;
	}
	
	.quanxuan{
		display: flex;
		align-items: center;
		height: 100%;
		width: 80px;
		margin-left: 10px;
	}
	
	.totalProce{
		flex: 1;
	}
	
	.quanxuan span{
		margin-left: 10px;
	}
	
	.jisuan{
		background-color: #ff5857;
		width: 100px;
		text-align: center;
	}
</style>
