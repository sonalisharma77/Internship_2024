<template>
  
  <q-page class="bg-black-2 q-pa-md">
  <div class="row">
  <div class="col-4">
    <q-card class="q-pa-md">
      <div class="row">
        <div class="text-h6">clients_registration</div>
        </div>
  <q-form>
   
  <q-input label="first_name" v-model="formData.first_name"/>
 
   <q-input label="last_name" v-model="formData.last_name"/>

  <q-input label="email" v-model="formData.email"/>
  <q-input label="contact number" v-model="formData.contact_number"/>
  <q-input type = "date" label="date_of_birth" v-model="formData.date_of_birth"/>
  <div class="row q-pa-sm">
  <div class="col" style="margin-right:20px;">
  <div>
    <label for="gender"></label>
   <q-radio val="male" label="male" />
    <q-radio val="female" label="female" />
    </div>
    </div>
     </div>
  
  <q-input label="address" v-model="formData.address"/>
  <q-input label="state" v-model="formData.state"/>
  <q-input label="city" v-model="formData.city"/>
  <q-input label="aadhar_number" v-model="formData.aadhar_number"/>
  <q-input label="pan_number" v-model="formData.pan_number"/>
  <q-btn class="q-my-lg" color="primary" type="button" @click="submit" label="Submit" />
 </q-form>
</q-card>
</div>
</div>
</q-page>
 
</template>
<script>
export default{
  data(){
    return{
      formData: {}
    }
  },
  methods:{
    submit(){
      let response = this.$axios.post('http//localhost:8055/items/clients_registration',this.formData)
    }
  }
}
</script>







