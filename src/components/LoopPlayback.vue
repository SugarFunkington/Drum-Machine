<template>
    <div class="p-2 is-flex is-flex-direction-row is-justify-content-space-between">

        <button @click="this.loopPlayLoop(index)" v-if="!this.playingLoop">
            <font-awesome-icon icon="fa-solid fa-play"/>
        </button>

        <button @click="this.pauseLoop()" v-if="this.playingLoop">
            <font-awesome-icon icon="fa-solid fa-pause"/>
        </button>

        <div class="beats">
            <span v-for="drum in loop" class="drumbeat-playback has-text-light has-text-centered">{{drum.drumbeat.toUpperCase()}}</span>
        </div>
        
        <button @click="this.store.deleteLoop(index)">
            <font-awesome-icon icon="fa-solid fa-trash-can"/>
        </button>

    </div>
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

<style scoped lang="scss">

.beats {
    display:inline-block;
}
.drumbeat-playback {
    display:inline-block;
    border:1px solid $light;
    border-radius:100%;
    padding:2px 8px;
}

button {
    background:none;
    border:none;
    color:$light;
    width:24px;
}

</style>