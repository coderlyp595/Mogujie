<template>
  <div>
    <div class="tab-ber-item" @click="itemClick">
      <div v-if="!IsActive"><slot  name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBerItem',
  props:{
    link:String,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      // IsActive:true
    }
  },
  computed: {
    IsActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle() {
      return this.IsActive ? {color: this.activeColor} : {}
    }
  },
  components: {
    
  },
  methods:{
    itemClick(){
      if(this.$route.fullPath!=this.link){
        this.$router.replace(this.link)
      }
    }
  }
}
</script>

<style>
  .tab-ber-item{
    text-align: center;
    font-size: 14px;
    font-weight: bold;
  }
  .tab-ber-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align:middle ;
  }
</style>
