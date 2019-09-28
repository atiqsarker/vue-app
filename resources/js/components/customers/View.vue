<template>
    <div class="customer-view" v-if="customer">
        <div class="user-avatar">
            <img src="https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png" alt="user">
        </div>
        <div class="customer-info" >
            <table class="table">
                <tr>
                    <th>ID</th>
                    <td>{{customer.id}}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{{customer.name}}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{{customer.email}}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{{customer.phone}}</td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>{{customer.website}}</td>
                </tr>
            </table>
            <div class="btn-wrapper">
                <router-link to="/customers" class="btn btn-primary">Back</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "customer-view",
        created(){
            if (this.customers.length){
                this.customer = this.customers.find((customer) => customer.id == this.$route.params.id)
            }else{
            // alert(`${this.$route.params.id}`);
            axios.get(`/api/customers/${this.$route.params.id}`)
                .then((response) => {
                    this.customer = response.data.customer;
                })
            }
        },
        data(){
            return {
                customer: null
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            },
            customers() {
                return this.$store.getters.customers
            },
        },
    }
</script>

<style scoped>
.btn-wrapper{
    text-align: right;
}
.user-avatar img {
    height: 200px;
}
</style>