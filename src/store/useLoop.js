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
            this.drumbeatStartTime = 0
        },
        addDrumbeat(drumbeat) {
            // if the drumbeat is the first in the recording, push it with no pause
            if (!this.drumbeatStartTime) {
                this.drumbeatStartTime = new Date().getTime()

                this.loops[this.loops.length - 1].push({
                    drumbeat: drumbeat,
                    pause: 0
                })
            } else {
                // Push subsequent drum beats with the required pause
                this.drumbeatEndTime = new Date().getTime()
                let timeElapsed = this.drumbeatEndTime - this.drumbeatStartTime
                this.loops[this.loops.length - 1].push({
                    drumbeat: drumbeat,
                    pause: timeElapsed
                })

                // Reset the timers for the next drumbeat
                this.drumbeatEndTime = 0
                this.drumbeatStartTime = new Date().getTime()

            }
        },
    }
})