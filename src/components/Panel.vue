<template>
  <section>

    <b-collapse class="panel" :open.sync="isOpen">
      <div slot="trigger" :style="{backgroundColor: color}" class="panel-heading white">
        <strong style="color: white">{{ title }}</strong>
      </div>
      <div class="panel-block">
        <div class="columns is-multiline" style="width: 110%">
          <div v-for="item in data" :key="item.title" class="card column">
            <header class="card-header" :style="{backgroundColor: color}">
              <p class="card-header-title">
                {{item.title}}
              </p>
            </header>
            <div class="card-content">
              <div class="content left">
                Point: {{item.point}}
                <br /> In Charge: {{item.assigned}}
              </div>
            </div>
            <footer class="card-footer">
              <a @click="prev(item['.key'], item)" class="card-footer-item">⇐ Prev</a>
              <a @click="delz(item['.key'])" class="card-footer-item">Delete</a>
              <a @click="next(item['.key'], item)" class="card-footer-item">Next ⇒</a>
            </footer>
          </div>
        </div>
      </div>
    </b-collapse>
  </section>
</template>

<script>
import swal from 'sweetalert'
export default {
  props: ['title', 'color', 'data'],
  data () {
    return {
      isOpen: true
    }
  },
  computed: {
    currentDB () {
      if (this.title === 'Back-log') {
        return 'backlog'
      } else if (this.title === 'To-do') {
        return 'todo'
      } else if (this.title === 'Doing') {
        return 'doing'
      } else {
        return 'done'
      }
    },
    nextDB () {
      if (this.title === 'Back-log') {
        return 'todo'
      } else if (this.title === 'To-do') {
        return 'doing'
      } else if (this.title === 'Doing') {
        return 'done'
      } else {
        return null
      }
    },
    prevDB () {
      if (this.title === 'To-do') {
        return 'backlog'
      } else if (this.title === 'Doing') {
        return 'todo'
      } else if (this.title === 'Done') {
        return 'doing'
      } else {
        return null
      }
    }
  },
  methods: {
    prev (id, data) {
      if (this.prevDB) {
        this.$db.ref(`${this.prevDB}/${id}`).update({title: data.title, assigned: data.assigned, point: data.point})
        this.$db.ref(`${this.currentDB}/${id}`).set(null)
      } else {
        alert('there are no previous step')
      }
    },
    next (id, data) {
      if (this.nextDB) {
        this.$db.ref(`${this.nextDB}/${id}`).update({title: data.title, assigned: data.assigned, point: data.point})
        this.$db.ref(`${this.currentDB}/${id}`).set(null)
      } else {
        alert('there are no next step')
      }
    },
    delz (id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this Kanban!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$db.ref(`${this.currentDB}/${id}`).set(null)
            swal('Poof! Your kanban has been deleted!', {
              icon: 'success'
            })
          } else {
            swal('Your kanban deletion has been cancelled')
          }
        })
    }
  }
}
</script>

<style>
  .columns{
    display: flex;
    justify-content: center;
  }
  .card {
    margin:10px;
  }
  .card-header-title {
    color: white;
  }
  .left {
    text-align: left;
  }
</style>
