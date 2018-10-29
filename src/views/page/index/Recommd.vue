<template>
    <div class="container">
        <h2>大多数人都等不到来日方长</h2>
        <h2>只有乍然离场而已</h2>
        <h1>
            <!-- <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=w0357ptsfjx" allowFullScreen="true" class="video"></iframe> -->
            <video src="http://220.194.231.160/vcloud1049.tc.qq.com/1049_M0139200001jMHza2ei3OY1001122187.f20.mp4?vkey=5C91B4F9DF2551D72F2B3D3F1275B16DA3B5874818DB30A03F1470410A050ACE01BF3F2B453D55BF551827B076BEEA1CF7D6C2E28026B33FFA849F6393AF86579BFAA821543A3DD0D46BD98C91E5F999985B567814ADE002" class="video" ref="video"></video>
            <img :src="imgUrl" @click="playPause" ref="img">
        </h1>
        <div class="con">
            <p class="name">@一禅经典语录</p>
            <p>在合适的时间遇到合适的人是一种幸福。@抖音小助手#情感语录#一禅小和尚</p>
        </div>
        <ul class="sign">
            <li><img src="../../../assets/4.png"></li>
            <li><i class="iconfont icon-shoucang"></i>3.7w</li>
            <li @click="showMask"><i class="iconfont icon-xiaoxi1"></i>851</li>
            <li><i class="iconfont icon-weixin"></i>1.1w</li>
        </ul>
        <div :class="isShowMask ? 'mask show' : 'mask'" ref="mask">
                <div class="number">
                    <span>851条评论</span>
                    <span class="close" @click="hideMask">X</span>
                </div>
                <div class="list" ref="list">
                    <div ref="recommdList" class="recommdList">
                        <dl v-for="(item,index) in list" :key="index">
                            <dt>
                                <img :src="item.img">
                                </dt>
                            <dd>
                                <h3>{{item.name}}</h3>
                                <p class="title">{{item.title}}</p>
                                <p class="time">{{item.time}}</p>
                            </dd>
                            <p>
                                <i @click="change(index)" :class="item.changeStatus ? 'active' : ''">❤</i>
                                <span>{{item.zan}}</span>
                            </p>
                        </dl>
                    </div>
                </div>                
            <div class="talk">
                <input type="text" placeholder="有爱评论,说点儿好听的~" ref="text">
                <p>
                    <span>＠</span>
                    <span>☺</span>
                    <span @click="send">发送</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapMutations} from 'vuex';
import {debounce} from '@/utils/utils';
export default {
    data(){
        return {
            imgUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540803729708&di=fc7e3569ce83f4938f641b11c2f39639&imgtype=0&src=http%3A%2F%2Fcdn2.freepik.com%2Fimage%2Fth%2F318-79084.jpg'
            
        }
    },
    computed:{
        ...mapState({
            list:state=>state.index.list,
            isShowMask:state=>state.index.isShowMask,
            changeStatus:state=>state.index.changeStatus
        })
    },
    methods:{
        ...mapActions({
            getList:'index/getList'
        }),
        ...mapMutations({
            hideMask:'index/hideMask',
            showMask:'index/showMask',
            change:'index/change',
            addData:'index/addData'
        }),
        send(){
            _hmt.push(['_trackEvent','更新评论','tap','发送消息'])
            if(!this.$refs.text.value){
                alert('评论不能为空');
                return;
            }
            let obj={
                name:'@Han',
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=590229629,325739828&fm=200&gp=0.jpg',
                title:this.$refs.text.value,
                time:this.getTime(+new Date),
                changeStatus:false,
                zan:0
            }
            this.addData(obj);
            this.$refs.text.value='';
        },
        getTime(time){
            let date=new Date(time);
            let y=date.getFullYear();
            let m=(date.getMonth()+1 < 10 ? '0'+date.getMonth()+1 : date.getMonth()+1);
            let d=date.getDate();
            let h=date.getHours();
            let min=date.getMinutes();
            return y+'/'+m+'/'+d+' '+h+':'+min;
        },
        load(e){
            if(this.$refs.recommdList.offsetHeight-this.$refs.list.offsetHeight-20<this.$refs.list.scrollTop){
                this.getList()
            }
        },
        playPause(){
            console.log(1)
            let myVideo=this.$refs.video;
            if(myVideo.paused){
                myVideo.play();
                this.imgUrl='http://img4.imgtn.bdimg.com/it/u=1021587485,177527093&fm=26&gp=0.jpg';
            }else{
                myVideo.pause();
                this.imgUrl='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540803729708&di=fc7e3569ce83f4938f641b11c2f39639&imgtype=0&src=http%3A%2F%2Fcdn2.freepik.com%2Fimage%2Fth%2F318-79084.jpg';
            }
        }
    },
    mounted(){
        this.getList();
        let func=debounce(this.load,100);
        this.$refs.list.addEventListener('scroll',func);
    }

}

</script>
