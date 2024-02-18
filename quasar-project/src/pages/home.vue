<template>
   <div class="row">
  <div class="col-4">
  <q-page class="flex-center">
    <q-avatar size="50px" font-size="40px" color="grey" text-color="white" icon="person" />
    <q-input v-model="text" :dense="dense" />
    </q-page>
 </div>
 <q-form>

  
 </q-form>
 </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
