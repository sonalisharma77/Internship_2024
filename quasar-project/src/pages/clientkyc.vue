<template>
  <q-page class="bg-black-2  q-pa-md ">
    <div class="row ">
  <div class="col-4">
    <q-card class="q-pa-md">
   
   <q-card-section>
        <div class="text-h5 justify center">Clients_Kyc</div>
      </q-card-section>
    <q-form>
      <q-input
        filled
        v-model="name"
        label="Name *"
        hint="client Name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
    
    <q-card-section>
        <q-input
        @update:model-value="val => { files = val }"
        multiple
        filled
        type="file"
        hint="Native file (multiple)"
      />
    </q-card-section>
    <label for="account type"></label>
    <q-radio v-model="option" val="opt1" label="saving" />
<q-radio v-model="option" val="opt2" label="current " />
     
      </q-form>
    
    </q-card>
      </div>
      </div>
  

  </q-page> 
</template>

<script>
export default {
  data(){
    return{
      formData: {}
    }
  },
 
}
</script>
