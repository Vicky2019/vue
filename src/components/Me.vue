<template>
    <div class="me">
        <h1>董婉清</h1>
        <img @click="go" id="active" src="../assets/me.jpg" alt="">
        <h4>来自武汉工程大学</h4>
        <h1> <span class="theme-color">软件工程</span>专业</h1>
    </div>
</template>
<script>

export default {
    name:"Me",
   data() {
      return {
      }
   },
   methods: {
       go(){
           this.$router.push('/')
       }
   }
}
</script>
<style scoped>
    h1,h4{
    text-align: center;
}
h1{
    font-size: 45px;
    color: #fff;
    font-weight: 900;
    line-height: 60px;
    letter-spacing: 10px;
    text-transform: uppercase;
}
h4{
    color: #fff;
    margin: 15px 0;
    font-size: 18px;
    letter-spacing: 12px;
    font-weight: 600;
    text-transform: uppercase;
}
.theme-color {
    color: #70e1f5;
}
#active{
    display:block;
    border-radius: 50%;
    width: 30%;
    margin-left:auto;
    margin-right:auto;
}
.me{
    margin:36% auto;  
}
</style>