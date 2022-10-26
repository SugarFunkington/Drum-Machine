<template>
    <hr/>
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
        'loop', 'drums'
    ],
    methods: {
        playLoop() {
            this.playingLoop = true
            console.log(this.drumbeat)
            console.log(this.drums)
                for (let i=0;i<this.loop.length;i++) {
                    setTimeout(() => {
                        const drumSound = new Audio("./src/assets/sounds/" + this.drums[this.loop[i].drumbeat] + ".mp3")
                        drumSound.play()
                    }, this.loop[i].pause)
                }

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