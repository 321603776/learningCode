<template>
  <div class="page">
    <div class="content">
      <h3>1、请问你的性别是：</h3>
      <div class="chengge">
         <input type="radio" name="sex" value="man" checked><span>男</span>
         <input type="radio" name="sex" value="woman"><span>女</span>
         <input type="radio" name="sex" value="secrecy"><span>保密</span>
      </div>
      <div class="bottom">
        <button class="next" @click="next">下一步</button>
        <button class="reset" @click="reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    next () {
      let radio = document.getElementsByName('sex')
      for (let index = 0; index < radio.length; index++) {
        if (radio[index].checked) {
          this.GLOBAL.sex = radio[index].value
        }
      }
      this.$router.push('/page2')
    },
    reset () {
      document.getElementsByName('sex')[0].checked = 'checked'
      this.GLOBAL.sex = document.getElementsByName('sex')[0].value
    }
  },
  mounted () {
    let radio = document.getElementsByName('sex')
    for (let index = 0; index < radio.length; index++) {
      if (radio[index].value === this.GLOBAL.sex) {
        radio[index].checked = 'checked'
      }
    }
  }
}
</script>

<style scoped>
.page{
  background-color: aliceblue;
  width: 430px;
  height: 700px;
  margin: 50px auto;
}
.content{
  position: relative;
  width: 380px;
  height: 100%;
  margin: 0px auto;
}
.content h3{
  padding-top: 20px;
}
.chengge input {
  width: 20px;
  height: 20px;
  margin: 4px;
}
.chengge span {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  vertical-align: top;
}
.bottom{
  position: absolute;
  bottom: 30px;
}
.bottom button{
  width: 170px;
  height: 35px;
  border: 1px solid #999;
  border-radius: 3px;
}
.reset{
  margin-left: 35px;
  background-color: aliceblue;
}
.next{
  background-color: rgb(92, 92, 92);
  color: aliceblue;
}
</style>
