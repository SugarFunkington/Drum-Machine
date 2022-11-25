<template>
    <div class="progress-container p-2 is-flex is-flex-direction-row is-justify-content-space-between">

        <button @click="this.togglePlayPause()" >
            <font-awesome-icon icon="fa-solid fa-play" v-if="!this.onBeatPlayLoop"/>
            <font-awesome-icon icon="fa-solid fa-pause" v-if="this.onBeatPlayLoop"/>
        </button>

        <div class="drumbeat-progress-indicator">
            <div class="drumbeats is-flex is-flex-direction-row is-justify-content-center">
                <DrumbeatPreview v-for="(drum, index) in loop" :index="index" :drum="drum" :loop="loop" :playingLoop="this.playingLoop" :loopStarted="this.loopStarted" :parentBox="this.parentBox" ref="drumbeatPreview"/>
            </div>

            <div class="progress-bar-bg">
                <div class="progress-bar" :class="{'in-progress':this.playingLoop}"></div>
            </div>
        </div>
        
        <button @click="this.store.deleteLoop(index)">
            <font-awesome-icon icon="fa-solid fa-trash-can"/>
        </button>
    </div>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'
import DrumbeatPreview from './DrumbeatPreview.vue'

export default {
    name: "LoopPlayback",
    props: [
        "loop",
        "index"
    ],
    components: {
        DrumbeatPreview
    },
    data() {
        return {
            store: useLoopStore(),
            playingLoop: false,
            loopStarted: false,
            onBeatPlayLoop: false,
            loopDuration: 0,
            parentBox: {}
        };
    },
    methods: {
        async playLoop(index) {
            this.playingLoop = true;
            
            if (!index) {
                this.loopDuration = this.store.loopDuration
                this.$emit('durationSet')
            }

            setTimeout(() => {
                this.playingLoop = false;
            }, (this.store.loopDuration - 10))

            if (!this.loopStarted) {
                for (let i=0;i<this.$refs.drumbeatPreview.length;i++) {
                    this.$refs.drumbeatPreview[i].setDrumbeatPosition(this.store.loopDuration, this.parentBox)
                }
                this.loopStarted = true;
            }
            
            await this.store.playLoop(index)
        },
        togglePlayPause() {
            this.onBeatPlayLoop = !this.onBeatPlayLoop
        }
    },
    mounted() {
        // In order to position the drumbeats correctly on the progress bar, they must be made aware of the position of their parent element
        const bar = document.getElementsByClassName('progress-bar-bg')
        this.parentBox = bar[0].getClientRects()

        this.loopDuration = this.store.loopDuration
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
    width:0%;
    height:100%;
    background-color:$light;
}

.in-progress {
    animation-name: inProgress;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration:v-bind('loopDuration + "ms"');
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

button {
    background:none;
    border:none;
    color:$light;
    width:24px;
    cursor:pointer;
}

.progress-container {
    width:100%;
}

</style>