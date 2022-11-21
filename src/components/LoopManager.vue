<template>
        <LoopRecorder @stop-recording="this.autoplayLoop()" />
        <TransitionGroup name="loopList">
            <LoopPlayback v-for="(loop, index) in this.store.loops" ref="loops" :loop="loop" :index="index" :key="loop" @loop-beginning="this.checkRecordingStatus()"/>
        </TransitionGroup>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'
import LoopRecorder from './LoopRecorder.vue'
import LoopPlayback from './LoopPlayback.vue'

export default {
    name: 'LoopManager',
    components: {
        LoopRecorder,
        LoopPlayback
    },
    data () {
        return {
            store: useLoopStore()
        }
    },
    methods: {
        autoplayLoop() {
            let loop = this.$refs.loops.at(-1)
            loop.loopPlayLoop(loop.index, loop.loop)
        },
        checkRecordingStatus() {
            if (this.store.loopRecording) {
                let loop = this.$refs.loops.at(-1)
                loop.loopStarted = true

                // If nothing is recorded, restart the pause timer
                if (loop.loop.length === 0) {
                    this.store.drumbeatStartTime = new Date().getTime()
                } else {
                // If something is recorded, stop the loop and play it
                    this.store.toggleRecording({type:'click'})  
                    this.autoplayLoop()  
                }
            }
        }
    }
}
</script>

<style scoped>
.loopList-move,
.loopList-enter-active,
.loopList-leave-active {
  transition: all 0.3s ease;
}

.loopList-enter-from,
.loopList-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.loopList-leave-active {
    position:absolute;
}

</style>