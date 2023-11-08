const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CompanyList = () => import('./components/company/List.vue' /* webpackChunkName: "resource/js/components/company/list" */)
const CompanyCreate = () => import('./components/company/Add.vue' /* webpackChunkName: "resource/js/components/company/add" */)
const CompanyEdit = () => import('./components/company/Edit.vue' /* webpackChunkName: "resource/js/components/company/edit" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'companyList',
        path: '/company',
        component: CompanyList
    },
    {
        name: 'companyEdit',
        path: '/company/:id/edit',
        component: CompanyEdit
    },
    {
        name: 'companyAdd',
        path: '/company/add',
        component: CompanyCreate
    }
]