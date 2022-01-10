<template>
 <div>
   <h2>{{name}}</h2>
   <h2>{{age}}</h2>
   <h2>{{gender}}</h2>
 </div>
</template>

<script>
export default {
  name: "Teacher",
  props:{
    name:{
      type: String,
      required: true
    },
    age:{
      type: Number,
      required: false,
      default: 18
    },
    gender:{
      type: String,
      required: false,
      default: 'female'
    }
  }
}
</script>

<style scoped>

</style>
