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
            this.drumbeatStartTime = new Date().getTime()
        },
        stopRecording() {
            this.drumbeatEndTime = new Date().getTime()
            // Add the remaining pause to the last drumbeat to maintain beat syncronization
            this.loops[this.loops.length - 1].at(-1).pause += (this.drumbeatEndTime - this.drumbeatStartTime)
            
            // Reset the timers for the next recording
            this.drumbeatEndTime = 0
            this.drumbeatStartTime = 0
            
            this.loopRecording = false
        },
        addDrumbeat(drumbeat) {
                // Push drum beat with the required pause
                this.drumbeatEndTime = new Date().getTime()
                let timeElapsed = this.drumbeatEndTime - this.drumbeatStartTime
                this.loops[this.loops.length - 1].push({
                    drumbeat: drumbeat,
                    pause: timeElapsed
                })

                // Reset the timers for the next drumbeat
                this.drumbeatEndTime = 0
                this.drumbeatStartTime = new Date().getTime()
        },
    }
})