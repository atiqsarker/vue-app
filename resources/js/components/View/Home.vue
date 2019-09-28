<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Home Component</div>
                        <router-link :to="{ path: 'hello' }" class="btn btn-info">Hello</router-link>
                    <div class="card-body">
                            {{welcome}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        computed:{
            welcome(){
                return this.$store.getters.welcome
            }
        }

    }
</script>

<style scoped>

</style>


