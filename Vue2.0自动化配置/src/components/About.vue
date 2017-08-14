<template>

    <div>


        <h1>about 页面</h1>
        <button @click="bok=!bok">显示或隐藏</button>
        <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
            <h2 v-show="bok">你能看到吗</h2>
        </transition>


    </div>

</template>

<style>


</style>

<script>

    export default{
        data(){
            return {bok:true}
        }
    }




</script>



