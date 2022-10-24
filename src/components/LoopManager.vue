<template>
        <LoopPlayer />
</template>

<script>
import { useLoopStore } from '@/store/useLoop'
import LoopPlayer from './LoopPlayer.vue'

export default {
    name: 'LoopManager',
    components: {
        LoopPlayer
    },
    data () {
        return {
            store: useLoopStore()
        }
    }
}
</script>