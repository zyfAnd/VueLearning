<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{gender}}</h2>
  </div>

</template>

<script>
export default {
  name: "Student",
  props:{
    name: String,
    age: Number,
    gender: String
  }
}
</script>

<style scoped>

</style>
