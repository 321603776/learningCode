<template>
  <div class="property">
    <div class="img">
      <img :src="info.image" alt="">
    </div>
    <div class="name">
      {{info.name}}
    </div>
    <div class="colorDiv">
      <div class="color" :style="backgroundColor"></div>
    </div>
    <div class="cost">
      ￥{{info.cost}}
    </div>
    <div class="but">
      <button>加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  data () {
    return {
      colors: {
        '白色': '#ffffff',
        '金色': '#dac272',
        '蓝色': '#233472',
        '红色': '#f2352e'
      }
    }
  },
  computed: {
    backgroundColor () {
      let propsColor = this.info.color
      let color = this.colors[propsColor]
      return 'background-color: ' + color
    }
  }
}
</script>

<style scoped lang="less">
.property{
  width: 302px;
  background-color: #ffffff;
  border-radius: 5px;
  position: relative;
  .img {
    width: 292px;
    margin: 10px auto;
    img {
      width: 100%;
      margin: 10px 0;
    }
  }
  .name{
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 290px;
    margin: 0 auto;
  }
  .colorDiv {
    .color {
      width: 18px;
      height: 18px;
      margin: 10px auto;
      border-radius: 50%;
      border: 1px solid #757575;
    }
  }
  .cost {
    text-align: center;
    font-weight: 100;
    font-size: 18px;
    padding-bottom: 10px;
  }
  .but {
    position: absolute;
    right: 3px;
    top: 3px;
    button {
      border: 0px;
      width: 85px;
      height: 30px;
      border-radius: 3px;
      background-color: #f31717;
      color: #ffffff;
      display: none;
    }
  }&:hover button{
  display: inline;
}
}

</style>
