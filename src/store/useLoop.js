import { defineStore } from 'pinia'
import { useDrumsStore } from './useDrums.js'

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
        async playLoop(loopIndex) {
            // Set timer to delay the loop by the required pause
            const timer = ms => new Promise(res => setTimeout(res, ms))

            // Get the drums data
            const drumStore = useDrumsStore()
            const drums = drumStore.getDrums()

            // Loop through the recording and play the drums
            for (let i=0;i<this.loops[loopIndex].length;i++) {
                const drumSound = new Audio("./src/assets/sounds/" + drums[this.loops[loopIndex].at(i).drumbeat] + ".mp3")
                drumSound.play()
                
                await timer(this.loops[loopIndex].at(i).pause)
            }

        },
        pauseLoop(loopIndex) {

        },
        deleteLoop(loopIndex) {

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