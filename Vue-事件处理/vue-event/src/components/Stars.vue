<template>
  <div >
    <el-button @click="updateList" type="primary">点我清空</el-button>
    <hr>
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
  </div>
</template>

<script>
export default {
  name: 'Stars',
  data(){
    return {
      mylist: null
    }
  },
  mounted() {
    this.axios.get('http://127.0.0.1:8011/ins/star').then((response)=>{
      this.mylist = response.data.list
    })
  },
  methods : {
    updateList (){
      // this.axios.get('http://127.0.0.1:8011/ins/star').then((response) => {
      //   this.myList = null
      // })
      this.mylist = null
    }
  }
}
</script>

<style >

</style>
