<template>
    <div class="new-customers">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <td>Name</td>
                    <td><input type="text" class="form-control" placeholder="Enter Your Name" v-model="customer.name"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="text" class="form-control" placeholder="Enter Your Email" v-model="customer.email"></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input type="text" class="form-control" placeholder="Enter Your Phone" v-model="customer.phone"></td>
                </tr>
                <tr>
                    <td>Website</td>
                    <td><input type="text" class="form-control" placeholder="Enter Your Website" v-model="customer.website"></td>
                </tr>
                <tr>
                    <td><router-link to="/customers" class="btn btn-primary">Back</router-link></td>
                    <td class="text-right"><button class="btn btn-primary" type="sibmit">Create</button></td>
                </tr>
            </table>
        </form>
        <div class="errors" v-if="errors">
            <ul>
                <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                    <strong>{{fieldName}}: </strong> {{fieldsError.join(',\n')}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import validate from 'validate.js'
    export default {
        name: "customer-new",
        data(){
            return {
                customer: {
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                },
                errors: null
            }
        }, //end data
        computed: {
            currentUser() {
                return this.$store.getters.currentUser
            }
        },
        methods: {
            add(){
                this.errors = null;
                const consttrains = this.getConstrainst();
                const errors = validate(this.$data.customer, consttrains);
                if (errors){
                    this.errors = errors;
                    return;
                    // console.log(this.errors);
                }
                axios.post('/api/customers/new', this.$data.customer, {
                    headers:{
                        "Authorization": `Bearer ${this.currentUser.token}`
                    }
                })
                    .then((response) => {
                    this.$router.push('/customers');
                })
            },

            getConstrainst(){
                return {
                    name: {
                        presence: true,
                        length: {
                            minimum: 3,
                            message: 'Must be at least 3 characters long'
                        }
                    },
                    email: {
                        presence: true,
                        email: true
                    },
                    phone: {
                        presence: true,
                        numericality: true,
                        length: {
                            minimum: 10,
                            message: 'Must be at least 10 digits long'
                        }
                    },
                    website: {
                        presence: true,
                        url: true
                    }
                }
            }
        }
    }
</script>

<style scoped>
.errors{
    background: lightcoral;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 20px 0 2px 0;
}
</style>
