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
        toggleRecording(e) {
            console.log(e)
            // If a loop is recording, stop it and close the loop
            if (e.code === "Space" || e.type === "click") {
                if (this.loopRecording) {
                    this.drumbeatEndTime = new Date().getTime()
                    // Check to see if anything has been recorded
                    if (this.loops[this.loops.length - 1] > 0) {
                        // Add the remaining pause to the last drumbeat to maintain beat syncronization
                        this.loops[this.loops.length - 1].at(-1).pause += (this.drumbeatEndTime - this.drumbeatStartTime)
                    }
                    
                    // Reset the timers for the next recording
                    this.drumbeatEndTime = 0
                    this.drumbeatStartTime = 0
                    
                    this.loopRecording = false
                } else {
                    this.loopRecording = true
                    this.loops.push([])
                    this.drumbeatStartTime = new Date().getTime()
                }   
            }
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
                console.log(drums[this.loops[loopIndex].at(i).drumbeat])
                await timer(this.loops[loopIndex].at(i).pause)
            }

        },
        deleteLoop(loopIndex) {
            this.loops.splice(loopIndex, 1)
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