//安装axios   npm install axios --save
//安装vuerouter   npm install vue-router --save
//安装better-scroll npm install better-scroll@1.13.2 --save
//安装图片懒加载   npm install vue-lazyload --save
//css单位转化 npm install postcss-px-to-viewport --save-dev
import axios from 'axios'

export function request(config) {
	//1.创建axios的实例
	const instance = axios.create({
		//发送网络请求的一个接口
		// baseURL:'http://123.207.32.32:8000/api/wh',
		baseURL:"http://106.54.54.237:8000/api/wh",
		timeout:5000
	})
	
	
	//请求拦截
	// instance.interceptors.request.use(config => {
	// 	return config
	// },err => {
		
	// })
	
	//响应拦截
	// instance.interceptors.response.toUpperCase(res => {
	// 	return res.data
	// }, err => {
		
	// })
	
	//发送真正的请求
	return instance(config)
}