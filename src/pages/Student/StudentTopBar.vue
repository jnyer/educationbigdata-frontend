<template>
<div>
  <el-menu
      :default-active="headerActiveIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="headerHandleSelect"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><el-icon><bell /></el-icon>信息</el-menu-item>
    <el-menu-item index="2"><el-icon><setting /></el-icon>设置</el-menu-item>
    <el-menu-item index="3"><el-icon><user /></el-icon>个人</el-menu-item>
  </el-menu>
</div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "StudentTopBar",
  setup(){
    const headerActiveIndex=ref('')
    const headerHandleSelect = (key, keyPath) => {
      console.log(key)
    }
    return{
      headerActiveIndex,
      headerHandleSelect,
    }
  }
}
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>