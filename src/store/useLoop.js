import { defineStore } from 'pinia'

export const useLoopStore = defineStore('main', {
    state: () => ({
        loopRecording: false,
        drumbeatStartTime: 0,
        drumbeatEndTime: 0,
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
            // set both times to 0, adding time for the last drumbeat in the loop
        },
        addDrumbeat(drumbeat) {
            // if start time = 0, add a start time
            // if not, add an end time and calculate the timeElapsed
            // add the timeElapsed to the previous drumbeat in the loop
            if (!this.drumbeatStartTime) {
                this.drumbeatStartTime = new Date().getTime()
            } else {
                this.drumbeatEndTime = new Date().getTime()
                let timeElapsed = this.drumbeatEndTime - this.drumbeatStartTime
                this.loops[this.loops.length - 1].at(-1).time = timeElapsed
            }

            this.loops[this.loops.length - 1].push({
                drumbeat: drumbeat,
                time: 0
            })
        },
    }
})