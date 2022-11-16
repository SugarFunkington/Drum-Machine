<template>
        <LoopRecorder @stop-recording="this.autoplayLoop()" />
        <TransitionGroup name="loopList">
            <LoopPlayback v-for="(loop, index) in this.store.loops" ref="loops" :loop="loop" :index="index" :key="loop" />
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
            console.log(this.$refs.loops.at(-1))
            let loop = this.$refs.loops.at(-1)
            loop.loopPlayLoop(loop.index, loop.loop)
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