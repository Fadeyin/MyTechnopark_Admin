// DetailRow.vue
  
  <template>
    <div @click="onClick">
      <div class="inline field">
        <label>Заголовок: </label>
        <span>{{rowData.title}}</span>
      </div>
      <div class="inline field">
        <label>Тело: </label>
        <span>{{rowData.body}}</span>
      </div>
	  <div class="inline field">
        <label>Дата: </label>
        <span>{{rowData.at}}</span>
      </div>
	  <div class="inline field">
        <label>Ссылка: </label>
        <span>{{rowData.link}}</span>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      rowData: {
        type: Object,
        required: true
      },
      rowIndex: {
        type: Number
      }
    },
    methods: {
      onClick (event) {
        console.log('my-detail-row: on-click', event.target)
      }
    },
  }
  </script>