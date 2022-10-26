<template>
    <button class="button" v-if="!this.store.loopRecording" @click="this.store.recordNewLoop()">Record</button>
    <button class="button" v-if="this.store.loopRecording" @click="this.store.stopRecording()">Stop Recording</button>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name: 'LoopRecorder',
    data () {
        return {
            store: useLoopStore(),
        }
    }
}
</script>

