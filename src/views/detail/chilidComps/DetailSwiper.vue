<template>
	<swiper class="name">
		<swiper-item v-for='item in topImages' :key='item'>
			<img :src="item" alt="">
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default {
		name:'DetailSwiper',
		components:{
			Swiper,
			SwiperItem
		},
		props:{
			topImages:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.name{
		height: 280px;
		overflow: hidden;
	}
</style>
