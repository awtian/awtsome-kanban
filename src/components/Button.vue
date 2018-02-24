<template>
  <div>
    <fab :actions="fabActions" @newKanban="openmodal" @about="alert" bgColor="hsl(204, 86%, 53%)"></fab>
    <div :class="create" class="modal">
      <div class="modal-background" @click="closemodal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create new Kanban</p>
          <button @click="closemodal" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Sleep" v-model="title">
            </div>
          </div>

          <div class="field">
            <label class="label">Assigned To</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g. Luthfi" v-model="assigned">
            </div>
          </div>

          <div class="field">
            <label class="label">Point</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g. 100" v-model="point">
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="createkanban" class="button is-success">Add new Kanban</button>
          <button @click="closemodal" class="button">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
  .modal-card-foot {
    justify-content: flex-end;
  }
</style>

<script>
import fab from 'vue-fab'
import swal from 'sweetalert'

export default {
  components: {
    fab
  },
  data () {
    return {
      create: '',
      title: '',
      point: '',
      assigned: '',
      bgColor: 'hsl(204, 86%, 53%)',
      position: 'top-right',
      fabActions: [{
        name: 'newKanban',
        icon: 'queue'
      },
      {
        name: 'about',
        icon: 'mood'
      }
      ]
    }
  },
  methods: {
    openmodal () {
      this.create = 'is-active'
    },
    closemodal () {
      this.create = ''
    },
    alert () {
      swal({
        title: 'Hello!',
        text: 'This page is created by @awtian 🐼',
        icon: 'success',
        button: 'Awesome!'
      })
    },
    createkanban () {
      this.$db.ref().child('backlog').push({
        title: this.title,
        point: +this.point,
        assigned: this.assigned
      })
      this.title = null
      this.point = null
      this.assigned = null
      this.closemodal()
      swal({
        title: 'Success!',
        text: 'Your new Kanban has been created 🐼',
        icon: 'success',
        button: 'Awesome!'
      })
    }
  }
}
</script>