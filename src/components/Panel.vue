<template>
    <section>

        <b-collapse class="panel" :open.sync="isOpen">
            <div slot="trigger" :style="{backgroundColor: color}" class="panel-heading white">
                <strong style="color: white">{{ title }}</strong>
            </div>
            <div class="panel-block">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    Title
                  </p>
                </header>
                <div class="card-content">
                  <div class="content left">
                    Point: 0<br />
                    In Charge: nama
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">⇐ Prev</a>
                  <a href="#" class="card-footer-item">Delete</a>
                  <a href="#" class="card-footer-item">Next ⇒</a>
                </footer>
              </div>
            </div>
        </b-collapse>

    </section>
</template>

<script>
export default {
  props: ['title', 'color'],
  data () {
    return {
      isOpen: true
    }
  }
}
</script>

<style>
.card{
  min-width: 100%;
}
.left{
  text-align: left;
}
</style>
