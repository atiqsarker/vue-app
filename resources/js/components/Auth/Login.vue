<template>
    <div class="login row justify-content-center">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-header text-center"> Login </div>
                <div class="card-body">
                    <form @submit.prevent="Authenticate">
                        <div class="form-group">
                            <label for="email">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="email" v-model="form.email" placeholder="Enter email" >
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" v-model="form.password" placeholder="Password" >
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="remember_me">
                            <label class="form-check-label" for="remember_me">Remember me</label>
                        </div>
                       <div class="form-group text-right">
                           <button type="submit" class="btn btn-primary">Login</button>
                       </div>
                       <div class="form-group">
                        <p class="error">

                            {{authError}}

                        </p>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../Helpers'
    export default {
        name: "Login",
           data(){
                return {
                    form: {
                        email: 'admin@admin.com',
                        password: '11111111'
                    }
               }
           },
        methods: {
            Authenticate(){
               this.$store.dispatch('login');

               login(this.$data.form)
                   .then((res) => {
                       this.$store.commit("loginSuccess", res);
                       this.$router.push({path: '/'})
                   })
                   .catch((error) => {
                       this.$store.commit("loginFailed", {error});
                   })
            }
        }, // methods ends
        computed: {
            authError() {
                return this.$store.getters.authError
            }
        },
    }
</script>

<style scoped>
    .error {
        text-align: center;
        color: red;
    }
</style>