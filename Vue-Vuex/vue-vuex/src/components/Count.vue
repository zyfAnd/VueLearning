<template>

  <div>
<!--    element selection 选择器-->
    <el-select v-model="value" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="add" type="primary"> add </el-button>

  </div>

</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      options: [{
        value: '1',
        label: '1'
      }, {
        value: '2',
        label: '2'
      }, {
        value: '3',
        label: '3'
      }, {
        value: '4',
        label: '4'
      }, {
        value: '5',
        label: '5'
      }],
      value: ''
    }
  },
  methods:{
    add() {

    }
  }
}
</script>

<style scoped>

</style>
