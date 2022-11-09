<template>
    <div class="p-2 is-flex is-flex-direction-row is-justify-content-space-between">

        <button @click="this.loopPlayLoop(index, loop)" v-if="!this.playingLoop">
            <font-awesome-icon icon="fa-solid fa-play"/>
        </button>

        <button @click="this.pauseLoop()" v-if="this.playingLoop">
            <font-awesome-icon icon="fa-solid fa-pause"/>
        </button>

        <div class="drumbeat-progress-indicator">
            <div class="drumbeats is-flex is-flex-direction-row is-justify-content-center">
                <span v-for="drum in loop" class="drumbeat-playback has-text-light has-text-centered is-unselectable">{{drum.drumbeat.toUpperCase()}}</span>
            </div>
            <div class="progress-bar-bg">
                <div class="progress-bar" :class="{'in-progress': this.playingLoop}"></div>
            </div>
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
            playingLoop: false,
            totalLoopLength: 0,
        }
    },
    methods: {
        async loopPlayLoop(index, loop) {
            this.setTotalLoopLength(loop)
            this.playingLoop = true

            while (this.playingLoop) {
                await this.store.playLoop(index)
            }
        },
        pauseLoop() {
            this.playingLoop = false
        },
        setTotalLoopLength(loop) {
            this.totalLoopLength = loop.reduce((pV,cV) => {
                return pV += cV.pause
            }, 0)

            this.totalLoopLength += 'ms'
        }
    }
}
</script>

<style scoped lang="scss">

@keyframes inProgress {
    0% {
        width:0%;
    }
    100% {
        width:100%;
    }
}
.progress-bar-bg {
    width:100%;
    height:1px;
    background-color:$dark;
    position:absolute;
    top:19px;
    left:0px;
    z-index:1;
}
.progress-bar {
    width:5%;
    height:100%;
    background-color:$light;
}

.in-progress {
    animation-name: inProgress;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration:v-bind('totalLoopLength');
}

.drumbeats {
    position:relative;
    z-index:2;
}

.drumbeat-progress-indicator {
    display:inline-block;
    height:38px;
    width:100%;
    position:relative;
}
.drumbeat-playback {
    display:inline-block;
    border:1px solid $dark;
    border-radius:100%;
    padding:2px 9px;
    margin:4px;
    background-color:$background;
}

button {
    background:none;
    border:none;
    color:$light;
    width:24px;
    cursor:pointer;
}

</style>