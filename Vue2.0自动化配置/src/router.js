/**
 * Created by think on 2017/7/2.
 */

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import About from './components/About.vue';

export default{
    routes:[
        {
            path:'/home',//路由
            component:Home//映射
        },
        {
            path:'/contact',
            component:Contact
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'*',
            component:Home
        }
    ]
}