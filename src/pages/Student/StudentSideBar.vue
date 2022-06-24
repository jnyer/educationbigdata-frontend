<template>
<div>
  <el-col :span="20" >
    <el-menu
        class="el-menu-vertical-demo"
        :default-active="pathList[0].path"
        style="margin-left: 20px"
        @select="sideHandleSelect"
        :router=isRouter
    >
      <el-menu-item :index="pathList[0].path">
        <span>基本信息</span>
      </el-menu-item>
      <el-menu-item :index="pathList[1].path">
        <span>学习情况</span>
      </el-menu-item>
      <el-menu-item :index="pathList[2].path">
        <span>体育情况</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>德育情况</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "StudentSideBar",
  setup(){
    const sideHandleSelect = (key, keyPath) => {
      console.log(key)
    }
    const isRouter=ref(true)
    const pathList=[
      {
        index:"0",
        path:"/student/information",
      },
      {
        index:"1",
        path:"/student/study",
      },
      {
        index:"2",
        path: "/student/sport",
      }]
    return{
      sideHandleSelect,
      isRouter,
      pathList
    }
  }
}
</script>

<style scoped>

</style>