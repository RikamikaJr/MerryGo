<template>
  <div id="app">
    <router-view />
    <component :is="layout">
      
    </component>
  </div>
</template>

<script>
const default_layout = "basichome"

export default {
  computed:{
    layout(){
      return (this.$route.meta.layout || default_layout) + '-layout'
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">

.v-application--wrap{
  min-height:0vh;
}

.app{
  height: 100vh !important;
  
  width: 100%
}

@media screen and (max-width: 759px){
  .app{
  height: 50vh;
}
}
</style>
