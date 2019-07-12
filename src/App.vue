<template>
  <div id="app">
    <img src="../src/assets/tuanzi.gif">
    <img class="logo" src="../src/assets/logo.png" >
    <router-view/>
    <div class="nav">
    <ul>
       <li @click="go(index)" v-for="(item,index) in list" :key="item" v-on:click="addClass(index)" v-bind:class="{active:index==current}">
         {{item.title}}
       </li>
    </ul>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'App',
  data(){
    return{
       current:0,
       list:[
         {title:"首页"},
         {title:"我的爱好"},
         {title:"我的生活"},
         {title:"作业"},
       ]
    }
  },
  methods: {
       addClass:function(index){
         this.current=index;
         if(index==0) this.$router.push('/');
         if(index==1) this.$router.push('/hobby');
       }
   }
}
</script>

<style scoped>
img{
  position:fixed;
  top:10px;
  left:10px;
  height:60px;
}
.active{
  color:#70e1f5;
}
#app .logo{
  left:54px;
  height:35px;
  top:3%;
}
.nav{
  position:fixed;
  height: 70px;
  width: 100%;
  font-size:20px;
  bottom:0;
}
li{
  float:left;
  border:none;
  width:25%;
  list-style:none;
  height: 70px;
  text-align: center;
  line-height:60px;
}
li:hover{
  cursor:pointer;
}
ul{
  width: 100%;
  margin:0;
  float:left;
  padding-left:0;
}
.nav{
  position:relative;
  color:white;
}
</style>
