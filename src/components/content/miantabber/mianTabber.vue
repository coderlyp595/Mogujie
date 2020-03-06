<template>
  <div>
    <tab-ber>
      <tab-ber-item link='/home' activeColor='#ff8198'>
       <img slot="item-icon" src="~assets/img/home/home.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/home/homeActive.svg" alt="">
       <div slot="item-text">首页</div>
      </tab-ber-item>
      <tab-ber-item link='/classify' activeColor='#ff8198'>
       <img slot="item-icon" src="~assets/img/home/classify.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/home/classifyActive.svg" alt="">
       <div slot="item-text">分类</div>
      </tab-ber-item>
      <tab-ber-item link='/shopping' activeColor='#ff8198'>
       <img slot="item-icon" src="~assets/img/home/shopping.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/home/shoppingActive.svg" alt="">
       <div slot="item-text">购物</div>
      </tab-ber-item>
      <tab-ber-item link='/user' activeColor='#ff8198'>
       <img slot="item-icon" src="~assets/img/home/user.svg" alt="">
       <img slot="item-icon-active" src="~assets/img/home/userActive.svg" alt="">
       <div slot="item-text">我的</div>
      </tab-ber-item>
    </tab-ber>
  </div>
</template>

<script>
import TabBer from 'components/common/tabber/TabBer'
import TabBerItem from 'components/common/tabber/TabBerItem'

export default {
  name: 'mianTabber',
  components: {
    TabBer,
    TabBerItem
  },
  methods: {
  } 
}
</script>

<style>

</style>
