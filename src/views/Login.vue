<template>
    <div class="login">
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 20px;">
                <van-button round block type="info" native-type="submit" @click="sublogin">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values)
        },
        sublogin() {
            if (this.username === '123' && this.password === '123') {
                // 登陆成功
                localStorage.setItem('token', 'bearer xxxx')
                this.$router.push('/homede')
            } else {
                // 登陆失败\
                localStorage.removeItem('token')
            }
        }
    }
}
</script>

<style lang="less" scoped>
body {
    background-color: rgb(255, 255, 255)
}

.login {
    width: 80%;
    height: 200px;
    margin: 100px auto;
    background-color: #fffdfd;
    box-shadow: 0 0 25px #cac6c6;
    border-radius: 15px;
    padding-top: 36px;
}
</style>
