<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>登录</span>
            </div>
            <el-tabs :model="currentIndx" stretch @tab-click="handleClick">
                <el-tab-pane label="登录" name="login">
                    <el-form :model="loginForm" ref="loginForm" status-icon :rules="rules">
                        <el-form-item label="用户名" label-width="75px" prop="username">
                            <el-input type="text" v-model="loginForm.username" maxlength="20"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="75px" prop="password">
                            <el-input type="password" v-model="loginForm.password" maxlenth="15"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <el-form :model="loginForm" ref="registerForm" status-icon :rules="rules">
                        <el-form-item label="用户名" label-width="75px" prop="username">
                            <el-input type="text" v-model="registerForm.username" maxlength="20"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="75px" prop="password">
                            <el-input type="password" v-model="registerForm.password" maxlenth="15"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" label-width="75px" prop="rePassword">
                            <el-input type="password" v-model="registerForm.rePassword" maxlength="15"></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error("请输入用户名"));
            } else {
                callback();
            }
        };
        var checkPassword = (rule, value, callback) => {
            console.log(value);
            if (value === '') {
                callback(new Error("请输入密码"));
            } else {
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (this.registerForm.rePassword==='') {
                callback(new Error('请再次输入密码'));
            } else if (this.registerForm.rePassword!= this.registerForm.password) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            tabName:"login",
            currentIndx: "login",
            loginForm: {
                username: "",
                password: "",
                rePassword:""
            },
            registerForm: {
                username: "",
                password: "",
                rePassword:""
            },
            rules: {
                username: [
                    { validator: checkUsername, trigger: 'blur' }
                ],
                password: [
                    { validator: checkPassword, trigger: 'blur' }
                ],
                rePassword: [
                    { validator: validatePass2, trigger: 'blur' }
                ]
            }
        }
    },

    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.tabName==="login")
                    
                    if(this.tabName==="register")
                    console.log(this.registerForm)
                } else {
                    return;
                }
            })
        },
        handleClick(tab){
            this.tabName=tab.name;
        }

    }
};
</script>

<style scoped lang="less">
.login {
    width: 1200 px;
    margin: 0 auto;

    .box-card {
        width: 500px;
        margin: 100px auto;
    }
}
</style>