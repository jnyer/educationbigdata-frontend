import {
	createRouter,
	createWebHashHistory
} from "vue-router"

const routes = [{ //登陆界面
	path: '/',
	name: 'login',
	component: () => import('@/pages/AreaLogin.vue')
},{
	path: '/area',
	name: 'areadata',
	component: ()=> import('@/pages/AreaData.vue')
},{
	path: '/school',
	name: 'schooldata',
	component: ()=> import('@/pages/SchoolData.vue')
},{
	path: '/teacher',
	name: 'teacherdata',
	component: ()=> import('@/pages/TeacherData.vue')
},{
	path: '/student',
	name: 'studentdata',
	component: ()=> import('@/pages/StudentData.vue')
}]

const router = createRouter({
	//内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

export default router
