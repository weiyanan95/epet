<template>
  <div id="app" >

    <div class="footer">
    <ul class="footerContent">
      <li class="tab-1">
        <router-link to="/first"><a href=""></a></router-link>
      </li>
      <li class="tab-2">
        <router-link to="/second"><a href=""></a></router-link>
      </li>
      <li class="tab-3">
        <router-link to="/third"><a href=""></a></router-link>
      </li>
      <li class="tab-4">
        <router-link to="/four"><a href=""></a></router-link>
      </li>
    </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  height 1500px
  .footer
    position fixed
    border-top 1px solid #e7e7e7
    height 50px
    width 100%
    bottom 0
    left 0
    z-index 100
    background #fff
    ul>li
      width 25%
      float left
      height 60px
      a
        display block
        height 40px
        width 42px
        margin 0 auto
        margin-top 8px
    .footerContent
      .tab-1>a
        background url("./common/img/11.png") no-repeat
        background-position -6px -12px
      .tab-2>a
        background url("./common/img/2.png") no-repeat
        background-position -9px -12px
      .tab-3>a
        background url("./common/img/3.png") no-repeat
        background-position -12px -12px
      .tab-4>a
        background url("./common/img/4.png") no-repeat
        background-position -16px -12px

</style>
