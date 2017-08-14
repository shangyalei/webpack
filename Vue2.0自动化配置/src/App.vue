<template>
    <div>
        <h1>{{msg}}</h1>
        <Navs></Navs>
    </div>
</template>

<style>
    div{
        background:#eeeeee;
    }
</style>


<script>
    //导入home组件

    import Home from './components/Home.vue';
    import Navs from './components/Navs.vue';
    export default{
        data(){
            return{msg:'hello Vue!'}
        },
        components:{Navs}

    }


</script>



