<template>


    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Hello Component</div>
                    <router-link :to="{ path: '/' }" class="btn btn-info">Home</router-link>
                    <div class="card-body">
                        <h1>Hello World</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Hello",

    }
</script>

<style scoped>

</style>
