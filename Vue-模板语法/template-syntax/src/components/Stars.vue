<template>
  <div>
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
    <el-button @click="pullData" type="primary"> pull data</el-button>
  </div>
<!--  <el-button type="primary" @click="cleanup" >clean up</el-button>-->
<!--  <el-button @click="cleanData" type="primary"> click me to clean data </el-button>-->
</template>



<script>
export default {
  name: "Stars",
  data() {
    return{
      mylist:null
    }
  },
  methods:{
    cleanData(){
      this.mylist = null
    },
    pullData(){
       this.axios.get('http://127.0.0.1:8011/ins/star').then((response) =>{
         this.mylist  =response.data.list
       })
    }
  },
  mounted() {
    this.axios.get('http://127.0.0.1:8011/ins/star').then(
        (response) =>{
          this.mylist = response.data.list
        }
    )
  }
}
</script>

<style scoped>

</style>
