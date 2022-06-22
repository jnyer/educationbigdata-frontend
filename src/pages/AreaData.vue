<template>
  <div class="main">
    <div class="top">
      <div class="timebar">2022年6月20日<br/>00: 00: 00</div>
      <div class="title">
        <div class="title-image">
          <p class="title-character">教育大数据驾驶舱</p>
        </div>
      </div>
      <div class="information">区域教育信息</div>
    </div>
    <div class="body">
      <div class="body-1">
        <div class="body-1-top">
          <div class="body-1-top-left">
            <div class="body-1-top-left-top">
              <p class="body-1-top-left-top-character">绩效排名</p>
            </div>
            <div class="body-1-top-left-bottom">
              <el-button :icon="Search" style="margin-top: 30px;margin-left: 35px;" type="primary">搜 索
              </el-button>
            </div>
          </div>
          <div class="body-1-top-right">
            <p
                style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;">
              区域</p>
            <el-select v-model="value_1" class="m-2" placeholder="Select" size="small"
                       style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
              <el-option v-for="item in options_1" :key="item.value" :label="item.label"
                         :value="item.value"/>
            </el-select>

            <p
                style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;clear: both;">
              机构性质</p>
            <el-select v-model="value_2" :popper-append-to-body="false" class="m-2" placeholder="Select" size="small"
                       style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
              <el-option v-for="item in options_2" :key="item.value" :label="item.label"
                         :value="item.value"/>
            </el-select>

            <p
                style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;clear: both;">
              机构类型</p>
            <el-select v-model="value_3" class="m-2" placeholder="Select" size="small"
                       style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
              <el-option v-for="item in options_3" :key="item.value" :label="item.label"
                         :value="item.value"/>
            </el-select>
          </div>
        </div>
        <div class="body-1-bottom">
          <el-table
              ref="singleTableRef"
              :data="tableData"
              style="width: 90%;margin: 20px auto auto;"
          >
            <el-table-column type="index" width="30"/>
            <el-table-column label="Date" property="date" width="60"/>
            <el-table-column label="Name" property="name" width="70"/>
            <el-table-column label="Address" property="address"/>
          </el-table>
        </div>
      </div>
      <div class="body-2">
        <div class="body-2-top">
          <div class="body-2-top-block"></div>
          <div class="body-2-top-block"></div>
          <div class="body-2-top-block"></div>
          <div class="body-2-top-block"></div>
        </div>
        <div class="body-2-bottom">
          <div class="body-2-bottom-left">
            <div class="body-2-bottom-left-top"></div>
            <div class="body-2-bottom-left-bottom"></div>
          </div>
          <div class="body-2-bottom-right"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
  setup() {
    const value_1 = ref('')
    const value_2 = ref('')
    const value_3 = ref('')
    const options_1 = [
      {
        value: 'xiangchengqu',
        label: '襄城区',
      },
      {
        value: 'fanchengqu',
        label: '樊城区',
      },
      {
        value: 'xiangzhouqu',
        label: '襄州区',
      }
    ]
    const options_2 = [
      {
        value: 'xiangchengqu',
        label: '襄城区',
      },
      {
        value: 'fanchengqu',
        label: '樊城区',
      },
      {
        value: 'xiangzhouqu',
        label: '襄州区',
      }
    ]
    const options_3 = [
      {
        value: 'xiangchengqu',
        label: '襄城区',
      },
      {
        value: 'fanchengqu',
        label: '樊城区',
      },
      {
        value: 'xiangzhouqu',
        label: '襄州区',
      }
    ]
    const tableData = reactive([
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      }
    ])
    return {
      tableData,
      value_1,
      value_2,
      value_3,
      options_1,
      options_3,
      options_2,
    }
  }
}

</script>
<style lang="scss" scoped>
/* .dark{
  --el-bg-color: #000000;
} */
/* 背景 */
.main {
  width: 100%;
  height: 810px;
  margin-top: -10px;
  margin-left: -10px;
  padding: 20px;
  background-image: url('../assets/pictures/login-pic/background.png');
}

/* 顶部 bar */
.top {
  margin: auto;
  width: 98%;
  height: 60px;
  /* border: 3px solid green; */
  padding-top: 10px;
  float: left;
}

/* 时间栏 */
.timebar {
  width: 20%;
  height: 50px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  float: left;
}

/* 标题栏 */
.title {
  /* margin: auto; */
  width: 50%;
  height: 50px;
  /* border: 3px solid green; */
  float: left;
  display: flex;
}

/* 标题背景图片 */
.title-image {
  margin: auto;
  width: 92%;
  height: 50px;
  background-image: url('../assets/pictures/login-pic/title/矩形 2@1x.png');
  display: flex;
}

/* 标题文字 */
.title-character {
  margin: auto;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
  align-self: center;
}

/* 最右侧当前页面信息 */
.information {
  width: 20%;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  float: left;
  text-align: right;
  padding: 10px;
}

/* 主体部分 */
.body {
  width: 98%;
  height: 600px;
  border: 3px solid green;
  margin: 10px auto auto;
  float: left;
  display: flex;
  align-items: center;
}

/* 左侧 */
.body-1 {
  width: 26%;
  height: 580px;
  border: 3px solid green;
  float: left;
  margin-left: 10px;
}

/* 左侧上半部分 */
.body-1-top {
  margin: auto;
  width: 100%;
  height: 150px;
  /* border: 3px solid green; */
  float: left;
}

/* 上半部分左 */
.body-1-top-left {
  width: 40%;
  height: 150px;
  float: left;
  /* border: 3px solid green; */
}

.body-1-top-left-top {
  width: 100%;
  height: 70px;
  float: left;
  /* border: 3px solid green; */
  display: flex;
}

.body-1-top-left-top-character {
  margin: auto;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;
  align-self: center;
}

.body-1-top-left-bottom {
  width: 100%;
  height: 70px;
  float: left;
  /* border: 3px solid green; */
  align-items: center;
}

/* 上半部分右 */
.body-1-top-right {
  width: 60%;
  height: 150px;
  float: left;
  /* border: 3px solid green; */
  display: table;
}

/* 左侧下半部分 */
.body-1-bottom {
  margin: auto;
  width: 100%;
  height: 425px;
  //border: 3px solid green;
  float: left;
}

/* 右侧主体部分 */
.body-2 {
  width: 70%;
  height: 580px;
  //border: 3px solid green;
  float: left;
  margin-left: 10px;
}

.body-2-top {
  width: 100%;
  height: 150px;
  border: 3px solid green;
  float: left;
  margin-top: -3px;
}

.body-2-top-block {
  width: 23.5%;
  float: left;
  margin-right: 10px;
  height: 150px;
  border: 1px solid green;

}

.body-2-bottom {
  width: 100%;
  height: 410px;
  border: 3px solid green;
  float: left;
  margin-top: 15px;
}

.body-2-bottom-left {
  width: 70%;
  height: 410px;
  border: 3px solid green;
  float: left;
}

.body-2-bottom-left-top {
  width: 100%;
  height: 250px;
  border: 1px solid green;
}

.body-2-bottom-left-bottom {
  width: 100%;
  height: 150px;
  border: 1px solid green;
  margin-top: 10px;
}

.body-2-bottom-right {
  width: 25%;
  height: 410px;
  border: 3px solid green;
  float: left;
  margin-left: 20px;
}
</style>
