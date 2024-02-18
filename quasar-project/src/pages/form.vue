<template>
  
  <q-page class="bg-black-2 q-pa-md">
  <div class="row">
  <div class="col-4">
    <q-card class="q-pa-md">
      <div class="row">
        <div class="text-h6">clients_registration</div>
        </div>
  <q-form>
   
  <q-input label="First_name" v-model="formData.first_name"/>
 
   <q-input label="Last_name" v-model="formData.last_name"/>

  <q-input label="Email" v-model="formData.email"/>
  <q-input label="Contact number" v-model="formData.contact_number"/>
  <q-input type = "date" label="date_of_birth" v-model="formData.date_of_birth"/>
  <div class="row q-pa-lg">
  <div class="col" style="margin-right:20px;">
  <label for="gender">Gender</label>
  <q-radio v-model="formData.account_type" val="opt1" label="Male" />
      <q-radio v-model="formData.account_type" val="opt2" label="Female" />
    </div>
    </div>
   
  <q-input label="Address" v-model="formData.address"/>
  <q-input label="State" v-model="formData.state"/>
  <q-input label="City" v-model="formData.city"/>
 <q-btn class="q-my-lg" color="primary" type="button" @click="submit" label="Submit" />
  
  <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
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
      let response = this.$axios.post('http//localhost:8055/items/form',this.formData)
    }
  }
}
</script>







