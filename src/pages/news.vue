<template>
<v-layout>
<v-flex>
<v-btn :to="{name: 'Создать объявление'}"
		class="btnpad"
        color="green"
        flat
      >
       Создать объявление
      </v-btn>
	 
<div>
      <my-vuetable
	  api-url="http://localhost:3333/api/v1/news"
      :fields="fields"
	  :append-params="moreParams"
      detail-row-component="my-detail-row"
	  >
	  </my-vuetable>
 </div> 
</v-flex>
</v-layout>
</template>

<script>  
import Vue from 'vue'
import MyVuetable from '@/components/app/MyVuetable'
import DetailRow from '@/components/app/DetailRow'
import FieldDefs from '@/components/app/RowsOptions.js'
Vue.component('my-detail-row', DetailRow)
export default {
  name: 'app',
  components: {
    MyVuetable
  },
  data () {
    return {
      fields: FieldDefs,
      moreParams: {}
    }
  },     
}
</script>

<style scoped>
  .btnpad {
	margin-right: 0px;
  }
</style>