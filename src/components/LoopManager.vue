<template>
        <LoopRecorder />
        <LoopPlayback v-for="(loop, index) in this.store.loops" :loop="loop" :drums="this.drums" :index="index"/>

</template>

<script>
import { useLoopStore } from '@/store/useLoop'
import LoopRecorder from './LoopRecorder.vue'
import LoopPlayback from './LoopPlayback.vue'

export default {
    name: 'LoopManager',
    props: [
        'drums'
    ],
    components: {
        LoopRecorder,
        LoopPlayback
    },
    data () {
        return {
            store: useLoopStore()
        }
    }
}
</script>