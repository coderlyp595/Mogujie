<template>
  <div>
    <div id="tab-ber">
        <slot></slot>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBer',
  components: {
    
  }
}
</script>

<style>
#tab-ber{
  height: 49px;
  background: #f6f6f6;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content:space-around;
}
</style>
