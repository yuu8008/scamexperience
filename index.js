alert("暇人が作りました")

const app =new Vue({
  el: "#app",
  data: {
    message: "こんにちわ"
  },
  methods: {
    hello(){
      alert("hello")
    }
  }
})
