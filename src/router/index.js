import {
	createRouter,
	createWebHashHistory
} from "vue-router"

const routes = [{ //登陆界面
	path: '/',
	name: 'login',
	component: () => import('@/pages/Login/AreaLogin.vue')
},{
	path: '/area',
	name: 'AreaData',
	component: ()=> import('@/pages/LeaderCockpit/LeaderCockpit.vue')
},{
	path: '/school',
	name: 'SchoolData',
	component: ()=> import('@/pages/School/SchoolData.vue')
},{
	path: '/teacher',
	name: 'TeacherData',
	component: ()=> import('@/pages/Teacher/TeacherData.vue')
},{
	path: '/student',
	name: 'StudentHome',
	redirect: '/student/information',
	component: ()=> import('@/pages/Student/StudentHome.vue'),
	children: [
		{path:'/information',component: ()=>import('@/pages/Student/Content/StudentInform.vue')},
		{path:'/study',component: ()=>import('@/pages/Student/Content/StudentStudy.vue')},
		{path:'/sport',component: ()=>import('@/pages/Student/Content/StudentSport.vue')},
	]
}]

const router = createRouter({
	//内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

export default router
