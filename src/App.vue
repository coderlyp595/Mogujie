<template>
  <div id="app">  
	<!-- 底部导航 -->
	<keep-alive exclude="Detail">
		<router-view/>
	</keep-alive>
	<mian-tabber></mian-tabber>
  </div>
</template>

<script>
import mianTabber from 'components/content/miantabber/mianTabber'


export default {
  name: 'App',
  components: {
    mianTabber
  }
}
</script>

<style>
  @import 'assets/css/base.css'
</style>