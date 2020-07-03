<template>
  <div id="app">
    <Home></Home>
    <Modal v-show="isModalVisible" @close="closeModal"></Modal>

    <button
            type="button"
            class="btn"
            @click="showModal"
    >
      Open Modal!
    </button>
  </div>
</template>

<script>

import Home from './views/Home.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Home,
    Modal
  },
  data () {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style lang="scss">

  @import './assets/styles/variables.scss';

</style>
