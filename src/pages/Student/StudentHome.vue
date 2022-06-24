<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <StudentTopBar></StudentTopBar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <StudentSideBar></StudentSideBar>
        </el-aside>
        <el-main>
          <div><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import StudentTopBar from "@/pages/Student/StudentTopBar";
import StudentSideBar from "@/pages/Student/StudentSideBar";
export default {
  name: "StudentHome",
  components: {StudentSideBar, StudentTopBar},
}
window.onload=function (){
  window.location.href="/#/student/information"
}
</script>

<style scoped>

</style>