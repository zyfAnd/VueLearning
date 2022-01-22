<template>

  <div>
<!--    element selection 选择器-->
    <h1> 当前求和为 ： {{sum}}</h1>
    <el-select v-model="n" placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.n"
          :label="item.label"
          :value="item.n">
      </el-option>
    </el-select>
    <el-button @click="increment" type="primary"> + </el-button>
    <el-button @click="decrement" type="primary"> - </el-button>
    <el-button @click="incrementOdd" type="primary"> 当前求和为奇数再加 </el-button>
    <el-button @click="incrementWait" type="primary"> 等一等再加 </el-button>

  </div>

</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      options: [{
        n: 1,
        label: '1'
      }, {
        n: 2,
        label: '2'
      }, {
        n: 3,
        label: '3'
      }, {
        n: 4,
        label: '4'
      }, {
        n: 5,
        label: '5'
      }],
      // value: 1,
      sum:0,
      n:1
    }

  },
  methods:{
    increment() {
      this.sum += this.n
    },
    decrement () {
      this.sum -= this.n
    },
    incrementOdd() {
      if (this.sum % 2) {
        this.sum += this.n
      }
    },
    incrementWait() {
      setTimeout(()=>{
        //函数
        this.sum += this.n
      }, 500)
    }

    }
}
</script>

<style scoped>

</style>
