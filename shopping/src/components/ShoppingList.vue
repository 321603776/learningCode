<template>
  <div class="shoppinglist" v-if="productList[0]">
    <div class="filter">
      <div>
        品牌:
        <span>Apple</span>
        <span>Beats</span>
        <span>Sonos</span>
        <span>B&O</span>
        <span>Bose</span>
      </div>
      <div>
        颜色:
        <span>白色</span>
        <span>金色</span>
        <span>红色</span>
        <span>蓝色</span>
      </div>
      <div>
        排序:
        <span>默认</span>
        <span>销量</span>
        <span>价格</span>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="info in productList" :key="info.id">
        <property :info="info"></property>
      </div>
    </div>
  </div>
</template>

<script>
import property from './property'

export default {
  components: {
    property
  },
  computed: {
    productList () {
      return this.$store.state.productList
    }
  },
  mounted () {
    this.$store.dispatch('getProductList')
  }
}
</script>

<style scoped lang="less">
.shoppinglist {
  width: 98%;
  margin: 20px auto;
  .filter {
  background-color: #fafafa;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 1px #9e9e9e;
  font-size: 18px;
  div {
    margin: 15px 0;
    span {
      border: 1px solid #b8b8b8;
      border-radius: 3px;padding: 3px;
      margin: 0 3px;
    }
  }
  }
  .list {
    margin-top: 20px;
    .item {
      float: left;
      margin: 20px;
    }
    &:after{
      content: '';
      display: block;
      clear: both;
    }
  }
}

</style>
