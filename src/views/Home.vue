<template>
  <div class="nav">
    <div>
      <xinxi />
    </div>
    <div class="tou">
      <ul>
        <li>首页</li>
      </ul>
    </div>
    <div class="footer">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="bag-o">购物</van-tabbar-item>
        <van-tabbar-item icon="search" class="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="play-circle-o">视频</van-tabbar-item>
        <van-tabbar-item icon="user-circle-o" @click="sub">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
import xinxi from '../components/XinXi.vue'
export default {
  data() {
    return {
      active: 0
    }
  },
  components: {
    xinxi
  },
  methods: {
    sub() {
      this.$router.push({ path: '/users' })
    }
  }
}
</script>
<style lang="less" scoped>
.tou {
  width: 100%;
  height: 80px;
  background: rgb(51, 112, 225);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
}

.tou li {
  float: left;
  margin: 0 20px;
  line-height: 80px;
  font-size: 16px;
  color: #ffff;
}

.footer {
  width: 100%;
  height: 50px;
  background-color: rgb(230, 228, 228);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}

.van-icon {
  color: rgb(76, 128, 230);
  line-height: 50px;
}

.search {
  position: relative;
  bottom: 10px;
  border-radius: 10px;
}
</style>
