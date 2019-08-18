import Vue from 'vue'
import VueRouter from 'vue-router'
// @ = src
// 懒加载
const Login = () => import('@/views/login/Login')
const Department = () => import('@/views/department/Department')
const Employee = () => import('@/views/employee/Employee')
const Homepage = () => import('@/components/homepage/Homepage')

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Homepage,
            children: [
                {
                    path: 'login',
                    component: Login
                },
                {
                    path: 'department',
                    meta: {
                        title: '部门管理',
                        name: '/department'
                    },
                    component: Department
                },
                {
                    path: 'employee',
                    meta: {
                        title: '员工管理',
                        name: '/employee'
                    },
                    component: Employee
                },
            ]
        }
    ]
})