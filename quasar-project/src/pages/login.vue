<template>
  <q-page class=" col- 0 col-md-6 flex justify-center">
    
    <q-form class="q-pa-lg">
      <div class="column q-gutter-md" style="max-width: 400px height:600px">
        <div class="row justify center">
        <h5 class="bg-blue text-h4 text-black q-pd-lg">Login</h5>
      </div>
      </div>
      <q-card square bordered class="q-pa-lg shadow-4">
          <q-card-section>
          <q-input v-model="email" type="email" label="email" />
          </q-card-section>
          <q-card-section> 
  <q-input v-model="password" type="password" label="password" />
</q-card-section>
 <q-card-section>
<q-btn color="blue-5" size="md" class="full-width" label="Submit" />
 </q-card-section>
 <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
</q-card>
  </q-form>
  

</q-page>
 
  </template>
  <script>
  export default {
    data(){
    return{
      formData: {}
    }
  },
  methods:{
    submit(){
      let response = this.$axios.post('http//localhost:8055/items/login',this.formData)
    }
  }
}
  
  
  </script>
  
 