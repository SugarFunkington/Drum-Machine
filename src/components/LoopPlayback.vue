<template>
    <hr/>
    {{index}}
    <button class="button" @click="this.loopPlayLoop(index)">Play loop</button>
    <button class="button" @click="this.pauseLoop()">Pause loop</button>
    <button class="button" @click="this.store.deleteLoop(index)">Delete loop</button>
    {{loop}}
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name:"LoopPlayback",
    props: [
        'loop', 'index'
    ],
    data () {
        return {
            store: useLoopStore(),
            playingLoop: false
        }
    },
    methods: {
        async loopPlayLoop(index) {
            this.playingLoop = true

            while (this.playingLoop) {
                await this.store.playLoop(index)
            }
        },
        pauseLoop() {
            this.playingLoop = false
        }
    }
}
</script>