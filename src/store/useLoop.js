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
            let currentLoop = this.loops[this.loops.length - 1]

            // If a loop is recording, stop it and close the loop
            if (e.code === "Space" || e.type === "click") {
                if (this.loopRecording) {
                    this.drumbeatEndTime = new Date().getTime()

                    // Check to see if anything has been recorded
                    if (currentLoop.length) {
                        // Add blank beat with pause to keep syncronization
                        currentLoop.push({
                            drumbeat: "",
                            pause: this.drumbeatEndTime - this.drumbeatStartTime
                        })
                    } else {
                        // If nothing is recorded, delete the empty loop
                        this.loops.pop()
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
                await timer(this.loops[loopIndex].at(i).pause)

                // Don't play anything if drumbeat is blank - last beat is a blank pause for syncronization
                if (this.loops[loopIndex].at(i).drumbeat !== '') {
                    const drumSound = new Audio("./src/assets/sounds/" + drums[this.loops[loopIndex].at(i).drumbeat] + ".mp3")
                    drumSound.play()
                }
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