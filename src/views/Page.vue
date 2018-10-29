<template>
    <div class="wrap">
        <div class="content">
            <router-view></router-view>
        </div>
        <footer>
            <ul>
                <router-link tag="li" to="/page/index">首页</router-link>
                <router-link tag="li" to="/page/follow">关注<span>61</span></router-link>
                <li><img src="@/assets/add.png" alt=""></li>
                <router-link tag="li" to="/page/message">消息</router-link>
                <router-link tag="li" to="/page/my">我的</router-link>
            </ul>
        </footer>    
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
@import url('../css/style.css');
@import url('../fonts/iconfont.css');
</style>

