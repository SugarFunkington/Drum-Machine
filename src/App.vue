<template>
  <div class="section">
    <div class="container" style="max-width:450px;">

      <h1 class="is-size-3">DM</h1>

      <div class="columns is-mobile is-multiline">
        <DrumPad v-for="drum in drums" :drum="drum"/>
      </div>

      <LoopManager />

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
        drums: [
          {
            keybind: "q",
            sound: "Heater-1"
          },
          {
            keybind: "w",
            sound: "Heater-2"
          },
          {
            keybind: "e",
            sound: "Heater-3"
          },
          {
            keybind: "a",
            sound: "Heater-4"
          },
          {
            keybind: "s",
            sound: "Open-HH"
          },
          {
            keybind: "d",
            sound: "Closed-HH"
          },
          {
            keybind: "z",
            sound: "Clap"
          },
          {
            keybind: "x",
            sound: "Kick-n-hat"
          },
          {
            keybind: "c",
            sound: "Kick"
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
.frame {
  max-width:300px;
}
</style>