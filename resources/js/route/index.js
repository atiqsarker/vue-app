import Home from '../components/View/Home'
import Hello from '../components/View/Hello'
import Login from '../components/Auth/Login'
import CustomersMain from '../components/customers/Main'
import NewCustomer from '../components/customers/New'
import Customer from '../components/customers/View'
import CustomersList from '../components/customers/List'
export  const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/hello',
        component: Hello,

    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
               path: '/',
                component: CustomersList
            },
            {
                path: 'new',
                component: NewCustomer
            },
            {
                path: ':id',
                component: Customer
            }
        ]
    }
];