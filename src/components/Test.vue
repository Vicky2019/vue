<template>
    <div class="hello">
       <h4>能遇到我</h4>
       <h1>算你 <span class="theme-color">幸运</span></h1>
       <button @click="go" id="active">关于我</button>
    </div>
</template>
<script>
export default {
    name:'Test',
   methods: {
       go(){
           this.$router.push('/me')
       }
   }
}
</script>
<style>
.hello{
    margin:54% auto;
}
h1,h4{
    text-align: center;
}
h1{
    font-size: 45px;
    color: #fff;
    font-weight: 900;
    line-height: 60px;
    letter-spacing: 10px;
    
}
h4{
    color: #fff;
    margin: 15px 0;
    font-size: 18px;
    letter-spacing: 12px;
    font-weight: 600;
    
}
.theme-color {
    color: #70e1f5;
}
button{
    display:block;
    background-color: #70e1f5;
    color:white;
    height: 50px;
    width: 100px;
    border:0;
    font-size:20px;
    margin:0,auto;
}
#active{
    display:block;
    cursor: pointer;
    font-weight: 5px;
    margin:0 auto;
}   
    
</style>