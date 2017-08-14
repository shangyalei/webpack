<template>

    <div>
        <h1 @click="fn">{{msg}}页面</h1>
        <p>我是用less设置的样式</p>
        <lei-button>这是home的按钮</lei-button>
    </div>

</template>

<!-- scoped禁止覆盖样式,使用less -->
<style scoped lang="less" rel="stylesheet/less">

    div{
        background:blue;
        p{
            background:green;
            /*h40+lh40px+c#fff*/
            height: 40px;
            line-height: 40px;
            color: #ffffff;
            position: relative;
            /*伪类元素*/
            &::after{
                position: absolute;
                content: "";
                width: 30px;
                height: 30px;
                border-radius:50%;
                background: pink;

            }
        }
    }

</style>

<script>

    //导出组件
    export default{
        data(){
            return{msg:'home'}
        },
        methods:{
            fn(){
                alert(1);
            }
        }
    }

</script>



