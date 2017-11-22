<template>
  <div class = 'wrap'>
  <div class="main">
    <div class="clearfix">
      <div class="epet-search bgf">
        <div class=" location">
          <span class="catordog c89">狗狗站</span>
          <span class="c89">|</span>
          <span class="myposition c89">重庆</span>
          <img src="../../common/img/12.png" alt="">
        </div>
        <p class="search-text">
          <input type="search" placeholder="搜索商品和品牌" class="">
          <span class="serach-ico"></span>

        </p>
        <img class="img" src="../../common/img/mydope.png" alt="">
      </div>

    </div>
    <div class="find_nav" ref="findNav" >
      <ul class="dscroll-ul" >
        <li class="dscroll-li"><span class="rela">首页</span></li>
        <li class="dscroll-li"><span class="rela">服装城</span></li>
        <li class="dscroll-li"><span class="rela">狗狗主粮</span></li>
        <li class="dscroll-li"><span class="rela">医疗保险</span></li>
        <li class="dscroll-li"><span class="rela">零食玩具</span></li>
        <li class="dscroll-li"><span class="rela">日用外出</span></li>
        <li class="dscroll-li"><span class="rela">美容香波</span></li>
      </ul>
    </div>

  </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this._initScroll()

    },
    methods:{
      _initScroll(){
        this.$nextTick(() => {
          const scrollN = new BScroll (this.$refs.findNav,{
            click:false,
            scrollX:true,
            scrollY:false


          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position relative
    z-index 100

    .main
      max-width 640px
      margin auto
      .clearfix
        box-sizing border-box
        padding-left 10px
        padding-bottom 5px
        padding-top 5px
        padding-right 10px
        .epet-search
          padding 8px 0
          background #fff
          width 100%
          .location
            position relative
            margin-right 20px
            float left
            font-size 16px
            padding 8px 0
            .c89
              color #898989
            .myposition
              font-size 13px
            img
              position absolute
              top 4px
              right -11px
              width 11px
              height 25px
          .search-text
            position relative
            input
              width 219px
              height 25px
              border 0
              border-radius 4px
              background #e9e9e9
              color #bcbcbc;
              text-indent 10px;
              font-size 13px;
              outline 0;
            .serach-ico
              width 11px
              height 11px
              position absolute
              right 35px
              top 0
              bottom 0
              margin auto 0
              background url("../../common/img/search.png")
              background-size 11px auto
              background-position 0 0
          .img
            float right
            margin-left 10px
            width 25px
            margin-top -23px
      .find_nav
        width 100%
        height 35px
        min-width 320px
        .dscroll-ul
          width 525px
          white-space nowrap
          display flex
          .dscroll-li
            display block
            width: 25%;
            float: left
            text-align center
            line-height 36px



</style>
