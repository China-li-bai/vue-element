<template>
    <div class="login-wrapper">
        <el-form :model="ruleForm" class="login-content" status-icon :rules="rules" ref="ruleForm">
            <h3>叩丁狼客户关系管理系统</h3>
            <el-form-item prop="username">
                <el-input type="text" placeholder="请输入账号" v-model="ruleForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input type="password" placeholder="请输入密码" v-model="ruleForm.pwd" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="loginFn()">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {LoginApi} from '@/request/api'


    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {},
                rules: {
                    username: [
                        {required: true, message: '请输入账号', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            loginFn() {
                this.$refs['ruleForm'].validate(vali => {
                    if (vali) {
                        // console.log('成功')
                        // 跨域问题（协议、域名、端口）其中一个不一样（jsonp、cors）
                        // qs.stringify({
                        //     username: this.ruleForm.username,
                        //     password: this.ruleForm.pwd
                        // }) ==> username=admin&password=1
                        // request.post('/api/coding/tokens', qs.stringify({
                        //     username: this.ruleForm.username,
                        //     password: this.ruleForm.pwd
                        // })).then(res => {
                        //     console.log(res)
                        // })
                        LoginApi({
                            username: this.ruleForm.username,
                            password: this.ruleForm.pwd
                        }).then(res => {
                            // console.log(res.data);
                            if (res.success === true) {
                                console.log('111');
                                this.$router.push('/department');
                                localStorage.setItem('token', res.data);
                                localStorage.setItem('username', this.ruleForm.username)
                            } else {
                                this.$message.error(res.msg)
                            }
                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #324057;

        .login-content {
            width: 320px;
            height: 240px;

            h3 {
                padding: 10px 0;
                text-align: center;
                color: #fff;
            }

            .login-btn {
                width: 100%
            }
        }
    }
</style>