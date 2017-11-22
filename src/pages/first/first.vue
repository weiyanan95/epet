<template>
  <div>
  <eleHeader></eleHeader>
  <div class="fristWrap"ref="homePage">

    <div class="homePage" >

    <div class="banner_item">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../common/img/5.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../common/img/6.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../common/img/7.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../common/img/8.jpg" alt=""></mt-swipe-item>
      </mt-swipe>

    </div>
    <split></split>
    <div class="columnnavdiv">
      <ul class="clear">
        <li class="f1"><img src="../../common/img/a.png" alt=""></li>
        <li class="f1"><img src="../../common/img/b.png" alt=""></li>
        <li class="f1"><img src="../../common/img/c.png" alt=""></li>
        <li class="f1"><img src="../../common/img/d.png" alt=""></li>
        <li class="f1"><img src="../../common/img/e.png" alt=""></li>
        <li class="f1"><img src="../../common/img/f.png" alt=""></li>
        <li class="f1"><img src="../../common/img/g.jpg" alt=""></li>
        <li class="f1"><img src="../../common/img/h.jpg" alt=""></li>
      </ul>
    </div>
    <split></split>
    <div class="surprise">
      <div class="surprise-tit">
        <div class="fl titimg">
          <img src="../../common/img/j.png" alt="">
        </div>
        <div class="fl f12">距本场结束</div>
        <div class="fl surprise-time hide">1511229600</div>
        <div class="more">
          <img src="../../common/img/k.png" alt="">
        </div>
      </div>
      <div class="swiper-wrapper" ref="imgSwiper">
        <div class="img-swiper" >
          <div class="swiper-slide slide-1">
            <div ><img src="../../common/img/21.png" ></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>

          <div class="swiper-slide slide-2">
            <div><img src="../../common/img/22.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-3">
            <div><img src="../../common/img/23.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-4">
            <div><img src="../../common/img/24.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-5">
            <div><img src="../../common/img/25.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-6">
            <div><img src="../../common/img/26.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-7">
            <div><img src="../../common/img/27.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ftc ft12">省￥13.50</p>
          </div>
          <div class="swiper-slide slide-8">
            <div><img src="../../common/img/28.jpg" alt=""></div>
            <div class="f12">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
            <p class="c999 ">省￥13.50</p>
          </div>
        </div>

      </div>
    </div>
    <div class="currency">
      <div class="titdiv ">
        <img src="../../common/img/30.png" alt="">
      </div>
      <div class="divboximg">
         <div class="left" >
           <img src="../../common/img/31.png" style="width: 159px ;height:189px;">
         </div>
        <div class="right" >
          <img src="../../common/img/32.png" style="width: 215px; height: 95px">
          <img src="../../common/img/33.png" style="width: 215px; height: 95px">
        </div>
      </div>
  </div>
      <split></split>
      <div class="titmoudle">
        <div >
          <img src="../../common/img/34png.png" alt="">
        </div>
        <div class="more">
          <img src="../../common/img/k.png" alt="">
        </div>
        <div></div>
      </div>
      <div class="fashion">

         <div class="relative ">
           <img src="../../common/img/37.png" alt="">
           <span class="cmallPlayIco"></span>
         </div>
         <div class="bottom">
           <div class="textover">夜空中最亮的星</div>
           <div>
             <span class="cmallViewIco "></span>
             <i>7397</i>
             <span class="ml10">|</span>02:20
           </div>
         </div>

      </div>
      <split></split>
      <div class="titmoudle">
        <div >
          <img src="../../common/img/35.png" alt="">
        </div>
        <div class="more">
          <img src="../../common/img/k.png" alt="">
        </div>
        <div></div>
      </div>
      <div class="fashion" style="height: 216px">

        <div class="relative ">
          <img src="../../common/img/38.png" alt="">


      </div>
      </div>
      <split></split>
      <div class="titmoudle">
        <div >
          <img src="../../common/img/41.png" alt="">
        </div>

        <div></div>
      </div>
      <div class="singlediv">
        <div class="pad10">
        <span class="ft15">谷登新品</span>
        <span class="c999">5折限量</span>
      </div>
        <div class="soleimg ">
          <img class="image" src="../../common/img/42.png">
        </div>
      </div>
      <div class="singlediv">
        <div class="pad10">
          <span class="ft15">NexGard尼可信</span>
          <span class="c999"></span>
        </div>
        <div class="soleimg ">
          <img class="image" src="../../common/img/43.png">
        </div>
      </div>
      <div class="singlediv">
        <div class="pad10">
          <span class="ft15">冠能</span>
          <span class="c999">满399送智能碗</span>
        </div>
        <div class="soleimg ">
          <img class="image" src="../../common/img/44.png">
        </div>
      </div>
      <div class="singlediv">
        <div class="pad10">
          <span class="ft15">优卡</span>
          <span class="c999">只为爱宠卓越表现</span>
        </div>
        <div class="soleimg ">
          <img class="image" src="../../common/img/45.png">
        </div>
      </div>
      <div class="singlediv">
        <div class="pad10">
          <span class="ft15">临期不改好货本质</span>
          <span class="c999">进口好货，低至1折！</span>
        </div>
        <div class="soleimg ">
          <img class="image" src="../../common/img/46.png">
        </div>
      </div>
      <div class="judgediv">
        <div class="titmoudle">
          <img src="../../common/img/51.png" alt="">
          <a href="#">
            好评率96.5% <i></i>
          </a>
        </div>
        <ul class="judge-cont">
          <li>
            <div class="img-div">
              <img src="../../common/img/47.png" alt="">
              <span>加入E宠2年2月</span>
            </div>
            <div class="info">
              <span class="username">阿**鹿</span>
              <span class="petname">中华田园猫</span>
            </div>
            <div class="detail">
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </div>
          </li>
          <li>
            <div class="img-div">
              <img src="../../common/img/48.png" alt="">
              <span>加入E宠6月</span>
            </div>
            <div class="info">
              <span class="username">鲍***美</span>
              <span class="petname">博美</span>
            </div>
            <div class="detail">
              <p>
                一直在e宠买东西，因为这里的东西都很好都是正品，而且优惠挺多的。其实只要坚持做正品，顾客就会一直留下来，因为没有人喜欢天天去比较哪家店卖的东西更靠谱。所以，我之所以一直选择e宠，还是因为质量，而且我也相信你们给的优惠是相当大的。狗狗一直在吃这里的东西，很健康，没有出现过任何问题，这就是你们给我的服务保证。谢谢！
              </p>
            </div>
          </li>
          <li>
            <div class="img-div">
              <img src="../../common/img/49.png" alt="">
              <span>加入E宠2年2月</span>
            </div>
            <div class="info">
              <span class="username">京****乐</span>
              <span class="petname">喜乐蒂</span>
            </div>
            <div class="detail">
              <p>
                没错，我是E宠的忠实客户，我家两个宝贝也是吃着E宠的粮食长大的。认识E宠还是一个偶然的机会，我家宝贝小的时候肠胃不好，为了能找到适合他们的狗粮，经常在淘宝上到处寻找，可买回来的粮食狗狗一吃就拉稀，愁的我不知如何是好，一次全家聚会说起这事，外甥给我说，他工作的城市有个叫E宠商城的专门卖宠物用品，里面的东西没有假货，里面的工作人员也都是爱狗人士，我一听当时就在网上搜到了并开始为狗狗挑选粮食，没想到我家宝贝吃后竟然不在拉稀了，让我太激动了，随后我还购买过洗毛的护毛的和消毒用品，用后感觉都非常好，我把E宠还推荐给了朋友，他们也感觉不错，现在也都在用。我希望E宠今后能经常做些力度大的活动，让我们这些老用户能得到更多的实惠，也让更多的人知道E宠拥有E宠。
              </p>
            </div>
          </li>
          <li>
            <div class="img-div">
              <img src="../../common/img/50.png" alt="">
              <span>加入E宠1年10月</span>
            </div>
            <div class="info">
              <span class="username">s*****d</span>
              <span class="petname">中华田园猫</span>
            </div>
            <div class="detail">
              <p>
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。在这里购物，我觉得放心，安心，省心。质量有保障，售货服务也很贴心，及时。这不仅仅是个购物平台，更是爱猫人的天地。祝福E宠可以越走越好，有更多丰富的商品
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import eleHeader from '../../components/header/header.vue'
  import split from '../../components/split/split.vue'
  export default {
    mounted(){
      this._initScroll()

    },
    methods:{
    _initScroll(){
      this.$nextTick(() => {
        const scroll = new BScroll (this.$refs.imgSwiper,{
          click:true,
          scrollX : true

        })
        const scrollS =  new BScroll (this.$refs.homePage,{
          click:true,

        })
      })
    }
    },
    components:{
      eleHeader,
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fristWrap
    overflow: hidden
    width 100%
    height 590px
    .homePage
      width 100%
      height 4000px
      .banner_item
        width 100%
        height 160px
        img
          width 100%
          height 100%
      .columnnavdiv
        width 100%
        height 175px

        .clear
          padding 0
          .f1
            float left
            width 25%
            img
              width 90px
              height 80px
      .surprise
        width 100%
        height 190px
        .surprise-tit
          position relative
          width 100%
          height 60px
          padding 10px
          .fl
            float left
            img
              width 105px
              height 24px
              margin-left -20px
          .f12
            margin-top 1px
            font-size 13px
            margin-left 10px
          .more
            position absolute
            top 2px
            right -8px
            img
              text-align right
              display block
              border 0
              vertical-align middle
              margin 0 0 0 auto
              width 67.5px
              height 38px
        .swiper-wrapper
          margin 0 auto
          height 130px
          white-space nowrap
          overflow hidden
          .img-swiper
            width 800px
            height 100%
            .f12
              color red
              margin-top 5px
              text-align center
              font-size 12px
            .c999
              color #999
              text-align center
              font-size 12px
            .slide-1
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-2
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-3
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-4
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-5
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-6
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-7
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
            .slide-8
              float left
              margin-right 10px
              width 84px
              height 100%
              text-align center
              img
                width 84px
      .currency
        height 230px
        .titdiv
          width 375px
          height 40px
          img
            width:100%
            height 100%
        /*max-height 73px
        max-width 100%*/
        .divboximg
          display flex
          width 375px
          height 190px
          border-top 1px solid #e7e7e7
          .left
            width 42.53%
          .right
            width 57.33%



      .titmoudle
        width 375px
        height 52px
        position relative
        text-align center
        padding-top 10px
        border-bottom 0px solid
        img
          width 187px
          height 53px
          margin: 0 auto
          vertical-align middle
        a
          position absolute
          right 0
          bottom 0
        .more
          position absolute
          top 17px
          right -6px
          img
            text-align right
            display block
            border 0
            vertical-align middle
            margin 0 0 0 auto
            width 67.5px
            height 38px
      .fashion
        width 375px
        height 268px
        .relative
          position relative
          img
            width 375px
            height 211px
          .cmallPlayIco
            background url("../../common/img/40.jpg") no-repeat
            background-size: contain;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -10px;
            margin-top: -10px;
        .bottom
          color #999
          font-size 12px
          padding 10px
          text-align center
          .textover
            color #333
            overflow hidden
            white-space nowrap
            word-wrap normal
            text-overflow ellipsis
          .ml10
            margin 0 10px
      .singlediv
        width 375px
        height 198px
        .pad10
          padding 10px
          .ft15
            font-size 15px
          .c999
            color #999
            font-size 12px
            margin-left 5px
        .soleimg
          padding-top 1px
          img
            width 375px
            height 155px
      .titmoudle
        img
        width 195px
        height 45px
        .right_text
          position absolute
          top 32px
          right -4px
          padding-right 10px
          font-size 12px
          a
            color #999
  .judgediv
    .judge-cont
      display flex
      justify-content space-around
      flex-wrap wrap
      padding 5px
      li
        width 173px
        height 264px
        margin-bottom 10px
        font-size 12px
        background #f5f5f5
        overflow hidden
        .img-div
          position relative
          width 173px
          height 173px
          margin 0 auto
          img
            height 173px
          span
            position absolute
            bottom 0
            width 100%
            line-height 20px
            color white
            text-align center
            background rgba(0,0,0, 0.2)
        .info
          margin 0 4px
          height 14px
          line-height 18px
          .username
            float left
          .petname
            float right
        .detail
          width 100%
          height 62px
          text-align left
          line-height 18px
          padding-bottom 14px
          c(#999)
          overflow hidden
          p
            padding 4px
            text-align justify
</style>
