<template>
  <div>
    <div class="menu">
      <div>
        <router-link class="left" to="/list">电商网站实例</router-link>
      </div>
      <div>
        <router-link class="right" to="/cart">购物车</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
  background-color: #333333;
}
.menu:after{
  content: '';
  display: block;
  clear: both;
}
.left{
  float: left;
  padding: 10px 30px;
  color: #ffffff;
}
.right{
  float: right;
  padding: 10px 30px;
  color: #ffffff;
}
</style>
