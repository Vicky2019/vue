<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" >
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <swiper :options="swiperOption">  
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <p class="word">{{item.msg}}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        /* 是否循环 */
        loop: true,
        autoplay: {
          /* 触碰后自动切换是否停止 */
          disableOnInteraction: false
        }
      },
      swiperList: [
          {id:'001',imgUrl:require('../assets/banner1.jpg'),msg:"笑是对身边的事物感到一瞬间的幸福而表现出来的东西，世界是美丽的，就算充满悲伤和泪水，也请睁开你的双眼，去做你想要做的事情，成为你想成为的人，我希望不论什么时候，你都不要后悔我们的相遇。"},
          {id:'002',imgUrl:require('../assets/banner2.jpg'),msg:"无法触碰的爱恋，融化在一生一世的拥抱中，其实美丽的故事都是没有结局，只因为它没有结局所以才会美丽，每个女孩心里都有一片萤火之森，那里住着一个少年，青春是萤火绚丽的流动银河，灿烂却也极致的短暂。"},
          {id:'003',imgUrl:require('../assets/banner3.jpg'),msg:"虽然迷茫与痛苦过，但也曾天真的笑过，思念着你的人所在的地方就是你的归处，如果将梦想作为信仰，不放弃地追求下去，一定会梦想成真的，人正是因为度过了一段阴暗岁月，才会更渴求黎明的曙光。"},
          
      ]
    };
  }
};
</script>
<style scoped>
.wrapper{
  width:100%;
  margin-top:40%;
  margin-bottom: 24%;
}
.swiper-img {
  display:block;
  width: 98%;
  margin:0 auto;
}
.word{
  width:98%;
  display:block;
  margin:0 auto;
  margin-top:10px;
  color:white;
  font-size:20px;
  text-indent: 2em;
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}
</style>