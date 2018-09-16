// MyVuetable.vue
<template>
  <div>
    <vuetable ref="vuetable"
      :api-url="apiUrl"
      :fields="fields"
      pagination-path=""
      :per-page="10"
      :multi-sort="true"
      :sort-order="sortOrder"
      :append-params="appendParams"
      detail-row-component="my-detail-row"
      @vuetable:cell-clicked="onCellClicked"
    >
      <template slot="actions" slot-scope="props">
        <div class="custom-actions">
          <button class="ui basic button"
            @click="onAction('zoom-item', props.rowData, props.rowIndex)">
            <i class="zoom icon"></i>
          </button>
          <button class="ui basic button"
            @click="onAction('edit-item', props.rowData, props.rowIndex)">
            <i class="edit icon"></i>
          </button>
          <button class="ui basic button"
            @click="onAction('delete-item', props.rowData, props.rowIndex)">
            <i class="delete icon"></i>
          </button>
        </div>
      </template>
    </vuetable>
  </div>
</template>

<script>
import Vuetable from 'vuetable-2/src/components/Vuetable'
import DetailRow from '@/components/app/DetailRow'
import CustomAction from '@/components/app/CustomAction'
import Vue from 'vue'
Vue.component('my-detail-row', DetailRow)
Vue.component('custom-actions', CustomAction)
export default {
  components: {
    Vuetable
  },
 props: {
     apiUrl: {
       type: String,
       required: true
     },
     fields: {
       type: Array,
       required: true
     },
     sortOrder: {
       type: Array,
       default() {
         return []
       }
     },
     appendParams: {
       type: Object,
       default() {
         return {}
       }
     },
     detailRowComponent: {
       type: String
     }
   },
  data () {
    return {}
  },
    methods: {
		onAction (action, data, index) {
		console.log('slot action: ' + action, data.name, index)
        },
	    onCellClicked (data, field, event) {
        console.log('cellClicked: ', field.title)
        this.$refs.vuetable.toggleDetailRow(data.id)
      }
    }
}
</script>