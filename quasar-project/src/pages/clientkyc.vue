<template>
  <q-page class="bg-black-2  q-pa-md ">
    <div class="row ">
      <div class="col-4">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="text-h5 justify center">Clients_Kyc</div>
          </q-card-section>
          <q-form>
            <q-input label="Aadhar_number" v-model="formData.aadhar_number" />
<q-card-section>
            <q-input @update:model-value="val => { files = val }" multiple filled type="file"></q-input>
           </q-card-section>
    
      <q-input label="Pan_number" v-model="formData.pan_number" />
      <div>
        <q-card-section>
        <q-input @update:model-value="val => { files = val }" multiple filled type="file"
        ></q-input>
      </q-card-section>
        
      </div>
      <div>
      <label for="Upload photo">Upload photo</label>
      <q-card-section>
      <q-input @update:model-value="val => { files = val }" multiple filled type="file"
        ></q-input>
      </q-card-section>
    </div>
      
      <label for="account type">Account Type</label>
      <q-radio v-model="formData.account_type" val="opt1" label="saving" />
      <q-radio v-model="formData.account_type" val="opt2" label="current " />
      <q-btn color="blue-5" size="md" class="full-width" label="Submit" />
    
    </q-form>
    </q-card>

    </div>
</div>
  
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    }
  },
  methods:{
    submit(){
      let response = this.$axios.post('http//localhost:8055/items/clientkyc',this.formData)
    }
  }
}
</script>
