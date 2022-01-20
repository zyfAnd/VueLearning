<template>
  <el-table
      :data="mylist"
      stripe
      style="width: 100%">
    <el-table-column
        prop="id"
        label="ID"
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="number"
        label="粉丝"
        width="180">
    </el-table-column>
  </el-table>

  <el-button @click="cleanData" type="primary"> click me to clean data </el-button>
</template>

<script>
import axios from "axios";

export default {
  name: "Stars",
  data(){
    return { myList: null}
  },
  mounted() {

    this.axios.get('http://127.0.0.1:8011/ins/star').then((response) => {
      console.log(response.data)
      this.mylist = response.data.list
    })
  },
  methods : {
    cleanData() {
      this.myList = null
    }
  }
}

</script>

<style scoped>

</style>
