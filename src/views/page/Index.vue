<template>
    <div class="box" @click="add">
        <div :class="heartState ? 'type heartbox' : 'heartbox'" ref="heartbox" v-for="(item,index) in arr" :key="index">
            {{item}}
        </div>
        <header>
            <span class="iconfont icon-fangdajing"></span>
            <div class="title">
                <router-link tag="p" to="/page/index/recommd">推荐</router-link>
                <router-link tag="p" to="/page/index/city">北京</router-link>
            </div>
            <span class="iconfont icon-gengduo-01"></span>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arr:[],
            nextTime:0,
            heartState:false,

        }
    },
    methods:{
        add(e){
            let date=new Date();
            if(date-this.nextTime<400){
                this.heartState=true;
                this.arr.push('❤');
                let index=this.arr.length-1;
                this.$nextTick(()=>{
                    this.$refs.heartbox[index].style.left=e.clientX-this.$refs.heartbox[index].getBoundingClientRect().width/2+'px';
                    this.$refs.heartbox[index].style.top=e.clientY-45-this.$refs.heartbox[index].getBoundingClientRect().height/2+'px';
                })
            }else{
                this.nextTime=date;
            }
        }
    },
    mounted(){

    }

}
</script>

