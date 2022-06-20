<template>
	<div class="main">
		<div class="top">
			<div class="timebar">2022年6月20日<br/>00: 00: 00</div>
			<div class="title">test</div>
			<div class="information">区域教育信息</div>
		</div>
		<div class="body"></div>
	</div>
</template>

<script>
</script>

<style>
	.main{
		width: 100%;
		height: 810px;
		margin-top: -10px;
		margin-left: -10px;
		padding: 20px;
		background-image: url('../assets/pictures/login-pic/background.png');
	}
	.top{
		margin: auto;
		width: 98%;
		height: 60px;
		border: 3px solid green;
		padding-top: 10px;
		float: left;
	}
	.timebar{
		width: 20%;
		height: 50px;
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 20px;
		float: left;
	}
	.title{
		/* margin: auto; */
		width: 50%;
		height: 50px;
		border: 3px solid green;
		float: left;
		background-image: url('../assets/pictures/login-pic/title/矩形 2@1x.png');
	}
	.information{
		width: 20%;
		color: white;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 20px;
		float: left;
		text-align: right;
		padding: 10px;
	}
	.body{
		
	}
</style>