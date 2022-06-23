<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
          <el-menu-item index="0">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="1"><el-icon><location /></el-icon>111</el-menu-item>
          <el-sub-menu index="2">
            <template #title>Workspace</template>
            <el-menu-item index="2-1">item one</el-menu-item>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-sub-menu index="2-4">
              <template #title>item four</template>
              <el-menu-item index="2-4-1">item one</el-menu-item>
              <el-menu-item index="2-4-2">item two</el-menu-item>
              <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-header>
      <el-container>

        <el-aside width="300px">
          <el-col :span="20" >
            <el-menu
                class="el-menu-vertical-demo"
                default-active="2"
                @open="handleOpen"
                @close="handleClose"
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>Navigator One</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1">item one</el-menu-item>
                  <el-menu-item index="1-2">item one</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                  <template #title>item four</template>
                  <el-menu-item index="1-4-1">item one</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
              <el-menu-item index="2">
                <el-icon><document /></el-icon>
                <span>Navigator Two</span>
              </el-menu-item>
              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>Navigator Three</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>Navigator Four</span>
              </el-menu-item>
              <!--              <el-menu-item index="4">-->
              <!--                <el-icon><setting /></el-icon>-->
              <!--                <span>Navigator Four</span>-->
              <!--              </el-menu-item><el-menu-item index="4">-->
              <!--              <el-icon><setting /></el-icon>-->
              <!--              <span>Navigator Four</span>-->
              <!--            </el-menu-item><el-menu-item index="4">-->
              <!--              <el-icon><setting /></el-icon>-->
              <!--              <span>Navigator Four</span>-->
              <!--            </el-menu-item><el-menu-item index="4">-->
              <!--              <el-icon><setting /></el-icon>-->
              <!--              <span>Navigator Four</span>-->
              <!--            </el-menu-item>-->



            </el-menu>
          </el-col>
        </el-aside>
        <el-main><el-row>
          <el-row>
            <el-col :span="12"><div id="main"></div></el-col>
            <el-col :span="12"><div></div></el-col>
          </el-row>
        </el-row></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
.grid-content{
  border-radius: 4px;
  min-height: 36px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
