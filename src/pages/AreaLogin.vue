<template>
	<div class="main">
		<div class="top">
			<div class="timebar">2022年6月20日<br />00: 00: 00</div>
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
							<el-button type="primary" :icon="Search" style="margin-top: 30px;margin-left: 18px;">搜 索
							</el-button>
						</div>
					</div>
					<div class="body-1-top-right">
						<p
							style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;">
							区域</p>
						<el-select v-model="value" class="m-2" placeholder="Select" size="small"
							style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value" />
						</el-select>

            <p
							style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;clear: both;">
							机构性质</p>
						<el-select v-model="value" class="m-2" placeholder="Select" size="small"
							style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value" />
						</el-select>

						<p
							style="color: white;font-size:10px;float: left;width: 28%;margin-left: 10px;margin-top: 20px;clear: both;">
							机构类型</p>
						<el-select v-model="value" class="m-2" placeholder="Select" size="small"
							style="width: 60%;margin-left:10px;float: left;margin-top: 15px;">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
						 	:value="item.value" />
						</el-select>
					</div>
				</div>
				<div class="body-1-bottom"></div>
			</div>
			<div class="body-2"></div>
		</div>
  </div>
</template>

<script>
</script>

<style>
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
		margin: auto;
		width: 98%;
		height: 600px;
		border: 3px solid green;
		margin-top: 10px;
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
	.body-1-bottom {}

	/* 右侧主体部分 */
	.body-2 {
		width: 70%;
		height: 580px;
		border: 3px solid green;
		float: left;
		margin-left: 10px;
	}
</style>
