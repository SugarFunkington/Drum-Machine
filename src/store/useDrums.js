import { defineStore } from 'pinia'

export const useDrumsStore = defineStore('drums', {
    state: () => ({
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
    }),
    actions: {
        getDrums() {
            return this.drums
        }
    }
})