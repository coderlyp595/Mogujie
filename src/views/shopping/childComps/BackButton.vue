<template>
	<div class="check-button" :class="{check:isChecked}">
		<img src="~assets/img/shopping/duihao.svg" alt="">
	</div>
</template>

<script>
	export default {
		name:'BackButton',
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style scoped>
	.check-button{
		width: 15px;
		border-radius: 50%;
		height: 15px;
		display: flex;
		align-items: center;
		border: 2px solid #aaa;
	}
	
	.check{
		border-color: red;
		background: red;
	}
</style>
