<template>
    <div class="header-wrapper">
        <h3 class="header-title">叩丁狼客户关系管理系统</h3>
        <i class="el-icon-menu header-icon"></i>
        <el-dropdown trigger="click" class="header-userinfo">
      <span class="el-dropdown-link header-userinfo-txt">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="less" scoped>
.header-wrapper {
    width: 100%;
    height: 70px;
    line-height: 70px;
    background-color: #409EFF;
    .header-title {
        float:left;
        padding: 0 10px;
        color: #fff;
    }
    .header-icon {
        float: left;
        line-height: 70px;
        color: #fff;
        font-size: 20px;
    }
    .header-userinfo {
        float: right;
        margin: 0 10px;
        .header-userinfo-txt {
            color: #fff;
        }
    }
}
</style>