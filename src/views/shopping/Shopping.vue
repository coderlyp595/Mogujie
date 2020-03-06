<template>
  <div class="shopping">
	<nav-bar class="nav-bar">
		<div slot="center">购物车({{length}})</div>
	</nav-bar>
	<cart-list />
	<cart-button-bar/>
  </div>
</template>

<script>
	import CartButtonBar from './childComps/CartButtonBar'
	import CartList from './childComps/CartList'
	import NavBar from 'components/common/navbar/NavBar'
	import { mapGetters } from 'vuex'
export default {
    name: 'Shopping',
	components: {
		NavBar,
		CartList,
		CartButtonBar
	},
	computed: {
		...mapGetters(['length'])
	}
}
</script>

<style scoped>
	.nav-bar{
		background-color: var(--color-tint);
		color: #FFF;
	}
	
	.shopping{
		height: 100vh;
	}
</style>
