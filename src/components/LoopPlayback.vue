<template>
    <hr/>
    {{index}}
    <button class="button" @click="playLoop()">Play loop</button>
    <button class="button" @click="pauseLoop()">Pause loop</button>
    <button class="button" @click="deleteLoop()">Delete loop</button>
    {{loop}}
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name:"LoopPlayback",
    props: [
        'loop', 'index', 'drums'
    ],
    methods: {
        playLoop() {
            this.playingLoop = true

            const timer = ms => new Promise(res => setTimeout(res, ms))

            async function playback() {
                for (let i=0;i<this.loop.length;i++) {

                    const drumSound = new Audio("./src/assets/sounds/" + this.drums[this.loop[i].drumbeat] + ".mp3")
                    
                    drumSound.play()
                    
                    await timer(this.loop[i].pause)
                }
            }

            playback()

        },
        pauseLoop() {
            this.playingLoop = false
        },
        deleteLoop() {

        }
    },
    data () {
        return {
            store: useLoopStore(),
            playingLoop: false
        }
    }
}
</script>