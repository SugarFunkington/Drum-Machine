<template>
  <div class="section">
    <div class="container" style="max-width:450px;">

      <h1 class="is-size-3">DM</h1>

      <div class="columns is-mobile is-multiline">
        <DrumPad v-for="(drumbeat, keybind) in drums" :drumbeat="drumbeat" :keybind="keybind"/>
      </div>

      <LoopManager :drums="this.drums"/>

    </div>
  </div>
</template>

<script>
import DrumPad from './components/DrumPad.vue'
import LoopManager from './components/LoopManager.vue';

export default {
    components: {
    DrumPad,
    LoopManager
},
    data () {
      return {
        drums: {
            q: "Heater-1",
            w: "Heater-2",
            e: "Heater-3",
            a: "Heater-4",
            s: "Open-HH",
            d: "Closed-HH",
            z: "Clap",
            x: "Kick-n-hat",
            c: "Kick"
          }
      }
    }
  }
</script>

<style lang="scss">
.frame {
  max-width:300px;
}
</style>