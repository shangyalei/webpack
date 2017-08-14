<template>

    <div>

        <router-link to="/Home">home</router-link>
        <router-link to="/About">about</router-link>
        <router-link to="/Contact">contact</router-link>

        <transition enter-active-class="animated fadeInUp" leave-active-class="hide">
            <router-view></router-view>
        </transition>

    </div>

</template>

<style scoped>
    div{
        font-size:20px;
    }
    .router-link-active{
        background: red;
    }
    .hide{
        display: none;
    }


</style>

<script>



</script>



