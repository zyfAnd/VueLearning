<template>
  <div id="app">
    <Stars> </Stars>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Stars from "@/components/Stars";
export default {
  name: 'App',
  components: {
    Stars
  },
  data() {
    return {
      mylist: [{
        "id": "16",
        "acronym": "D",
        "user_id": "dilrabaxx63",
        "name": "迪丽热巴",
        "number": 43071,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/77da4ec4a8d5a6d4edd04d5b9852a3b8.jpg",
        "home_page": "",
        "sort": 31,
        "create_time": "2019-08-01 10:26:27",
        "update_time": "2020-02-21 09:56:50"
      }, {
        "id": "38",
        "acronym": "Y",
        "user_id": "__4444x__",
        "name": "易烊千玺",
        "number": 289100,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/7a559ee2f52c87cce10edd618aaa3e4d.jpg",
        "home_page": "",
        "sort": 30,
        "create_time": "2019-08-06 14:35:45",
        "update_time": "2020-03-02 17:35:59"
      }, {
        "id": "17",
        "acronym": "L",
        "user_id": "mr.lixian",
        "name": "李现",
        "number": 182467,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/000928676a67b1b8dff98b900c0fef74.jpg",
        "home_page": "",
        "sort": 28,
        "create_time": "2019-08-01 11:20:32",
        "update_time": "2020-03-02 10:39:29"
      }, {
        "id": "15",
        "acronym": "L",
        "user_id": "7_luhan_m",
        "name": "鹿晗",
        "number": 1004421,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/0b9a3881593026b005bbc989dec28478.jpg",
        "home_page": "",
        "sort": 27,
        "create_time": "2019-07-26 14:21:54",
        "update_time": "2020-03-02 08:12:45"
      }, {
        "id": "24",
        "acronym": "S",
        "user_id": "taylorswift",
        "name": "霉霉",
        "number": 1100982,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/89050407b78b95f86186800fac510e49.jpg",
        "home_page": "",
        "sort": 26,
        "create_time": "2019-08-03 21:17:22",
        "update_time": "2020-03-03 12:27:02"
      }, {
        "id": "36",
        "acronym": "R",
        "user_id": "justinbieber",
        "name": "贾斯丁比伯",
        "number": 1899888,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/bb13b9524cd7d5b360ecdd2a1dab5833.jpg",
        "home_page": "",
        "sort": 25,
        "create_time": "2019-08-06 10:08:28",
        "update_time": "2020-03-03 13:38:37"
      }, {
        "id": "8",
        "acronym": "S",
        "user_id": "caixukun",
        "name": "蔡徐坤",
        "number": 113734,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/ed50c08ce010dd34a2b14f82879d1c71.jpg",
        "home_page": "https://instagram.com/caixukun?igshid=ad40jvjzvz6k",
        "sort": 24,
        "create_time": "2019-07-14 23:18:45",
        "update_time": "2020-02-28 10:10:24"
      }, {
        "id": "28",
        "acronym": "",
        "user_id": "kkkwang2",
        "name": "王俊凯",
        "number": 84889,
        "is_show": 1,
        "recommend": 1,
        "head_portrait": "https://kct.shancuntu.top/uploads/mingxinghd/29969699b3dafa1d993bc7b7d110e845.jpg",
        "home_page": "",
        "sort": 23,
        "create_time": "2019-08-05 02:03:46",
        "update_time": "2020-02-19 18:46:54"
      }],
    }

  },
  methods: {
    getList() {
      this.axios.get('http://127.0.0.1:8011/ins/star').then((response) => {
        console.log(response.data)
        this.mylist = response.data.list
      })
      // or
      this.$http.get('http://127.0.0.1:8011/ins/star').then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
