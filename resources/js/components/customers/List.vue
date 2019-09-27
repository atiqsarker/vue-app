<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/customers/new" class="btn btn-primary">Add New</router-link>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="!customers.length">
                <tr>
                    <td colspan="4" class="text-center text-danger"><h1>Customer not found</h1></td>

                </tr>
            </template>
            <template v-else>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>{{customer.id}}</td>
                    <td>{{customer.name}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.website}}</td>
                    <td><router-link :to="`/customers/${customer.id}`">View</router-link></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "customer-list",
        mounted(){
            return this.$store.dispatch('getCustomers')
        },
        computed: {
            customers() {
                return this.$store.getters.customers
            }
        },
    }
</script>

<style scoped>
.btn-wrapper{
    text-align: right;
    padding-bottom: 20px
}
</style>