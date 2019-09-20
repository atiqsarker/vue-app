<template>
    <div id="main">
        <Header/>
        <div class="content">
           <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import Header from './View/Header'
    export default {
        name: 'MainApp',
        components:{
            Header,
        }
    }
</script>
