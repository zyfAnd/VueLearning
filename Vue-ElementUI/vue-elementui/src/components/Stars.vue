<template>
<!--  <div>-->
<!--    <ul id="v-for-object" >-->
<!--      <li v-for="value in mylist" :key="value.name" >-->
<!--        {{ value.id }} {{ value.name }} {{ value.number }}-->
<!--      </li>-->
<!--    </ul>-->

    <el-table
        :data="mylist"
        stripe
        style="width: 100%">
      <el-table-column
          prop="name"
          label="日期"
          width="180">
      </el-table-column>
    </el-table>
<!--  </div>-->
</template>

<style>

</style>

<script>
export default {
  name: 'Stars',
  mounted(){
    this.axios.get('http://127.0.0.1:8011/ins/star').then((response) => {
      console.log(response.data)
      this.mylist = response.data.list
    })
  },
  data() {
    return {
      mylist: null
    }

  },
  methods: {
    getList() {
      this.axios.get('http://127.0.0.1:8011/ins/star').then((response) => {
        console.log(response.data)
        this.mylist = response.data.list
      })
      // // or
      // this.$http.get('http://127.0.0.1:8011/ins/star').then((response) => {
      //   console.log(response.data)
      // })
    }
  }
}
</script>
