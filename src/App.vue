<template>
  <div class="section">
    <div class="container" style="max-width:450px;">

      <div class="columns is-mobile is-multiline">
        <DrumPad v-for="(drumbeat, keybind) in this.store.getDrums()" :drumbeat="drumbeat" :keybind="keybind"/>
      </div>

      <LoopManager />

    </div>
  </div>
</template>

<script>
import DrumPad from './components/DrumPad.vue'
import LoopManager from './components/LoopManager.vue';

import { useDrumsStore } from './store/useDrums.js'

export default {
  components: {
    DrumPad,
    LoopManager
  },
  data () {
    return {
      store: useDrumsStore()
    }
  }
}
</script>