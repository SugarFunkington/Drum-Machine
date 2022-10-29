<template>
    <hr/>
    {{index}}
    <button class="button" @click="this.store.playLoop(index)">Play loop</button>
    <button class="button" @click="this.store.pauseLoop()">Pause loop</button>
    <button class="button" @click="this.store.deleteLoop()">Delete loop</button>
    {{loop}}
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name:"LoopPlayback",
    props: [
        'loop', 'index', 'drums'
    ],
    data () {
        return {
            store: useLoopStore(),
            playingLoop: false
        }
    }
}
</script>