import { defineStore } from 'pinia'

export const useLoopStore = defineStore('main', {
    state: () => ({
        loopRecording: false,
        loops: []
    }),
    getters: {

    },
    actions: {
        recordNewLoop() {
            this.loopRecording = true
            this.loops.push([])
        },
        stopRecording() {
            this.loopRecording = false
        },
        addDrumbeat(drumbeat) {
            this.loops[this.loops.length - 1].push(drumbeat)
            //this.loops[-1].push(drumbeat)
        }
    }
})