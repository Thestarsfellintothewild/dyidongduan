<template>
    <div class="xinxi">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul v-for="(obj, index) in list" :key="index">
                <div class="box">
                    <div class="imgs">
                        <img :src="obj.image" alt="" />
                    </div>
                    <div class="con">
                        <h4>{{ obj.title }}</h4>
                        <li>{{ obj.content }}</li>
                        <span>{{ obj.data }}</span>
                        <van-icon name="star-o" />
                    </div>
                </div>
            </ul>
        </van-pull-refresh>
    </div>
</template>
<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
    data() {
        return {
            list: [],
            count: 0,
            isLoading: false
        }
    },
    methods: {
        getlist() {
            axios.get('/api/get/news').then(res => {
                console.log(res)
                this.list = res.data.list
            })
        },
        onRefresh() {
            setTimeout(() => {
                Toast('刷新成功')
                this.isLoading = false
            }, 1000)
        }
    },
    mounted() {
        this.getlist()
        this.onRefresh()
    }
}
</script>
<style lang="less" scoped>
.xinxi {
    padding-bottom: 50px;
    padding-top: 80px;
}

.xinxi ul {
    margin-top: 10px;
}

.box {
    display: flex;
    justify-content: space-around;
}

.con {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-family: "Microsoft Yahei";
}

.con h4 {
    color: rgb(34, 34, 34);
}

.con li,
span {
    font-size: 16px;
    font-family: "Microsoft Yahei";
    color: rgb(162, 163, 164);
}
</style>
