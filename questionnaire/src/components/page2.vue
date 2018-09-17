<template>
  <div class="page">
    <div class="content">
      <h3>2、请选择你的兴趣爱好：</h3>
      <div class="chengge" @change="change">
         <input type="checkbox" name="hobby" value="book"><span>看书</span><br>
         <input type="checkbox" name="hobby" value="swimming"><span>游泳</span><br>
         <input type="checkbox" name="hobby" value="running"><span>跑步</span><br>
         <input type="checkbox" name="hobby" value="film"><span>看电影</span><br>
         <input type="checkbox" name="hobby" value="music"><span>听音乐</span><br>
      </div>
      <div class="bottom">
        <button class="next" @click="$router.push('/page3')" disabled>下一步</button>
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
    }
  },
  methods: {
    change () {
      let checkbox = document.getElementsByName('hobby')
      let next = document.getElementsByClassName('next')[0]
      let unm = 0
      let hobby = []
      for (let index = 0; index < checkbox.length; index++) {
        if (checkbox[index].checked) {
          unm = unm + 1
          hobby.push(checkbox[index].value)
          this.GLOBAL.hobby = hobby
        }
      }
      if (unm > 1 && unm < 4) {
        next.disabled = false
        next.style.background = '#5c5c5c'
        next.style.color = '#fff'
      } else {
        next.disabled = true
        next.removeAttribute('style')
      }
    },
    reset () {
      let checkbox = document.getElementsByName('hobby')
      for (let index = 0; index < checkbox.length; index++) {
        checkbox[index].checked = false
      }
      this.GLOBAL.hobby = []
      this.change()
    }
  },
  mounted () {
    let checkbox = document.getElementsByName('hobby')
    for (let index = 0; index < checkbox.length; index++) {
      if (this.GLOBAL.hobby.indexOf(checkbox[index].value) !== -1) {
        checkbox[index].checked = 'checked'
      }
    }
    this.change()
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
  width: 123px;
  height: 35px;
  background-color: aliceblue;
  border: 1px solid #999;
  border-radius: 3px;
}
</style>
