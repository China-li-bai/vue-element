<template>
    <el-menu
            :default-active="onRouterActive"
            class="sidemenu-wrapper"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
    >
        <el-submenu
                index="1"
                v-for="menu in menuData">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{menu.title}}</span>
            </template>
            <!--<router-link to=''></router-link>-->
            <el-menu-item v-for="submenu in menu.children" :index="submenu.index">{{submenu.title}}</el-menu-item>

        </el-submenu>
    </el-menu>
</template>

<script>
    import {menuConfig} from '@/config/config'
    export default {
        name: "SideMenu",
        data() {
            return {
                menuData: menuConfig
            }
        },
        computed: {
            onRouterActive() {
                // 获取当前路径
                return this.$route.meta.name
            }
        }

    }
</script>

<style lang="less" scoped>
    .sidemenu-wrapper {
        position: absolute;
        top: 70px;
        left: 0;
        bottom: 0;
        width: 250px;
        background-color: pink;
    }
</style>