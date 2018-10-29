import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

// 加载路由页面
const Page = () =>
    import ('@/views/Page');
const Index = () =>
    import ('@/views/page/Index');
const Follow = () =>
    import ('@/views/page/Follow');
const Message = () =>
    import ('@/views/page/message');
const My = () =>
    import ('@/views/page/My');
const City = () =>
    import ('@/views/page/index/City');
const Recommd = () =>
    import ('@/views/page/index/Recommd');

Vue.use(Router);

let router = new Router({
    routes: [{ // 一级路由
            path: '/page',
            name: 'Page',
            component: Page,
            children: [{ // 二级路由
                    path: '/page/index',
                    component: Index,
                    children: [ // 三级路由
                        {
                            path: '/page/index/recommd',
                            component: Recommd
                        },
                        {
                            path: '/page/index/city',
                            component: City
                        }
                    ]
                },
                { // 二级路由
                    path: '/page/follow',
                    component: Follow
                },
                { // 二级路由
                    path: '/page/message',
                    component: Message
                },
                { // 二级路由
                    path: '/page/my',
                    component: My
                }
            ]
        },
        {
            path: '*',
            redirect: '/page/index/recommd'
        }
    ]
})

export default router;