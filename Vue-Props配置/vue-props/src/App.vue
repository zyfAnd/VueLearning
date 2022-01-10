<template>
  <div id="app">
    <Student name="Zhang San" age="18" gender="Male"></Student>
    <hr>
    <School name="Qing Hua" setup-date="2020-12-31"></School>
    <hr>
    <Teacher name="Li Si" age="28" ></Teacher>
  </div>
</template>

<script>

import Student from "@/components/Student";
import School from "@/components/School";
import Teacher from "@/components/Teacher";
export default {
  name: 'App',
  components: {
    Teacher,
    School,
    Student
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
