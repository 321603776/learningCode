<template>
  <div class="page">
    <div class="content">
      <h3>3、请介绍一下自己：</h3>
      <div class="chengge">
        <textarea @keyup="change" style="width: 100%;height: 300px;font-size: 18px" placeholder="不少于100字"
          :value="about"></textarea>
      </div>
      <div class="bottom">
        <button class="next" disabled @click="submitClick">提交</button>
        <button class="back" @click="$router.go(-1)">上一步</button>
        <button class="reset" @click="reset">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      about: this.GLOBAL.about
    }
  },
  methods: {
    change () {
      let textarea = document.getElementsByTagName('textarea')[0]
      let next = document.getElementsByClassName('next')[0]
      if (textarea.value.length > 99) {
        next.disabled = false
        next.style.background = '#5c5c5c'
        next.style.color = '#fff'
      } else {
        next.disabled = true
        next.removeAttribute('style')
      }
      this.GLOBAL.about = textarea.value
    },
    reset () {
      document.getElementsByTagName('textarea')[0].value = ''
      this.GLOBAL.about = ''
    },
    submitClick () {
      alert(`提交成功:\n性别:${this.GLOBAL.sex}\n爱好:${this.GLOBAL.hobby}\n介绍自己:${this.GLOBAL.about}`)
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
/* .chengge input {
  width: 20px;
  height: 20px;
  margin: 4px;
}
.chengge span {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  vertical-align: top;
} */
.bottom{
  position: absolute;
  bottom: 30px;
}
.bottom button{
  width: 123px;
  height: 35px;
  background-color: aliceblue;
  border: 1px solid #999;
  border-radius: 3px;
}
</style>
