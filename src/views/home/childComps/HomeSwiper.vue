<template>
	<swiper>
		<swiper-item v-for="item in banners" :key="item.image">
			<a :href="item.link">
				<img :src="item.image" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	
	export default {
		name:'HomeSwiper',
		props: {
			banners: {
				type:Array,
				default() {
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods:{
			imageLoad() {
				if(!this.Isload) {
					this.$emit('swiperImageLoad')
					this.Isload = true
				}
			}
		},
		data() {
			return{
				Isload:false
			}
		}
	}
</script>

<style>
</style>
