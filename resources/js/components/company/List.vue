<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"categoryAdd"}' class="btn btn-primary">Create</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>company</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Website</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="companies.length > 0">
                                <tr v-for="(company,key) in companies" :key="key">
                                    <td>{{ company.id }}</td>
                                    <td>{{ company.name }}</td>
                                    <td>{{ company.description }}</td>
                                    <td>
                                        <router-link :to='{name:"companyEdit",params:{id:company.id}}' class="btn btn-success">Edit</router-link>
                                        <button type="button" @click="deleteCompany(company.id)" class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Company Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"companies",
    data(){
        return {
            companies:[]
        }
    },
    mounted(){
        this.getCompanies()
    },
    methods:{
        async getCompanies(){
            await this.axios.get('/api/company').then(response=>{
                this.companies = response.data
            }).catch(error=>{
                console.log(error)
                this.companies = []
            })
        },
        deleteCompany(id){
            if(confirm("Are you sure to delete this company ?")){
                this.axios.delete(`/api/company/${id}`).then(response=>{
                    this.getCompanies()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>