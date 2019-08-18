<template>
    <div>
        <!--头部-->
        <m-header/>
        <!--左侧菜单-->
        <m-side-menu/>
        <!--中间内容-->
        <m-content/>
    </div>

</template>

<script>
    //1. 引入
    import MHeader from './Header'
    import MSideMenu from './SideMenu'
    import MContent from './Content'
    export default {
        name: "Homepage",
        // 2.注册
        components: {
            MHeader,
            MSideMenu,
            MContent
        }
    }
</script>

<style scoped>

</style>