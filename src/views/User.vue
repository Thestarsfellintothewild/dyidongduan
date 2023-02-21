<template>
    <div>
        <i @click="returnn"><van-icon name="arrow-left" />
            <span>返回首页</span>
        </i>
        <span class="tuichu" @click="sub">退出</span>
        <div class="login">
            <img src="../assets/OIP-C.jpg" alt="">
            <div class="denglu" v-for="(obj, index) in list" :key="index">
                <p>{{ obj.name }}</p>
            </div>
        </div>
        <div class="box">
            <a href="#"><van-icon name="envelop-o" />
                <p>消息</p>
            </a>
            <a href="#"><van-icon name="star-o" />
                <p>收藏</p>
            </a>
            <a href="#"><van-icon name="clock-o" />
                <p>浏览记录</p>
            </a>
            <a href="#"><van-icon name="balance-o" />
                <p>钱包</p>
            </a>
        </div>
</div>
</template>
<script>
import axios from 'axios'
import $ from 'jquery/dist/jquery'
export default {
    data() {
        return {
            list: []
        }
    },
    methods: {
        returnn() {
            this.$router.push('/homede')
        },
        getlist() {
            axios.get('/index.json').then(res => {
                console.log(res)
                this.list = res.data.list
            })
        },
        sub() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    },
    mounted() {
        this.getlist()
    }
}
</script>
<style lang="less" scoped>
.tuichu {
    float: right;
}

.login {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}

.login img {
    border-radius: 70px;
    width: 100px;
    height: 100px;
}

.denglu {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box {
    margin-top: 50px;
    width: 100%;
    height: 150px;
    border-bottom: 3px solid rgb(143, 140, 140);
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: rgb(240, 240, 240);
}

.box a {
    color: black;
}

.box a:focus {
    color: rgb(193, 80, 80);
}

.jq {
    width: 50px;
    height: 50px;
    background: aquamarine;
    position: absolute;
}
</style>
