<template>
	<div v-if="Object.keys(xinxi).length !== 0" class="comment-info">
		<div class="info-header">用户评价
			<div class="header-more">
				更多
				<i class="arrow-right"></i>
			</div>
		</div>
		<!-- 用户名字 头像-->
		<div class="info-user">
			<img :src="xinxi.user.avatar" alt="">
			<span>{{xinxi.user.uname}}</span>
		</div>
		<div class="info-detail">
			<p>{{xinxi.content}}</p>
			<div class="info-other">
				<span class="date">{{xinxi.created | showDate}}</span>
				<span>{{xinxi.style}}</span>
			</div>
			<div class="info-imgs">
				<img :src="item" alt="" v-for="(item,index) in xinxi.images" :key='index'>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {formatDate} from 'common/utils'
	export default{
		name:"DetailCommonInfo",
		props:{
			xinxi:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		//过滤器
		filters:{
			showDate(value){
				//将时间戳转成date对象
				const date = new Date(value * 1000)
				 
				 //将date进行格式化
				 return formatDate(date,'yyyy-mm-dd')
			}
		}
	}
	
</script>

<style scoped="scoped">
	.comment-info{
		padding: 5px 12px;
		color: #333;
		border-bottom: 5px solid #f2f5f8;
	}
	
	.info-header{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	
	.shop-title {
		float: left;
		font-size: 15px;
	}
	
	.header-more {
		float: right;
		margin-right: 10px;
		font-size: 13px;
	}
	
	.info-user{
		padding-top: 5px;
	}
	
	.info-user img{
		width: 46px;
		height: 46px;
		border-radius: 50%;
	}
	
	.info-user span{
		position: relative;
		font-size: 15px;
		top: -15px;
		margin-left: 10px;
		margin-top: 0;
	}
	
	.info-detail{
		padding: 0 5px 15px =;
	}
	
	.info-detail p{
		font-size: 14px;
		color: #777;
		line-height: 1.5;
	}
	
	.info-detail .info-other{
		font-size: 12px;
		color: #999;
		margin-top: 10px;
	}
	
	.info-other .date{
		margin-right: 8px;
	}
	
	.info-imgs{
		margin-top: 10px;
	}
	
	.info-imgs img{
		width: 70px;
		height: 70px;
		margin-right: 5px;
	}
</style>
