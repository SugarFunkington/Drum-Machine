<template>
    <div class="has-text-centered p-2">
        <button 
            class="notRecording" 
            :class="{recording:this.store.loopRecording}"
            @click="this.toggleRecording($event)" 
            @keypress="this.toggleRecording($event)"></button>
    </div>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name: 'LoopRecorder',
    data () {
        return {
            store: useLoopStore(),
        }
    },
    created() {
        window.addEventListener('keydown', this.store.toggleRecording)
    },
    methods: {
        toggleRecording(e) {
            this.store.toggleRecording(e)
            if (!this.store.loopRecording) {
                this.$emit('stopRecording')
            }
        }
    }
}
</script>

<style lang="scss">

.notRecording {
    background:$primary;
    border:0;
    box-shadow:
        0 0 0 5px $background,
        0 0 0 6px $primary;
    height:20px;
    width:20px;
    border-radius:100%;

}
.recording {
    position:relative;
    margin:auto;
    background:none;
    background-color:$primary;
    animation:pulse 1.2s infinite linear;
    border:none;
    border-radius:100%;
    height:20px;
    width:20px;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 
        0 0 0 0px rgba(128, 0, 0, 0.33),
        0 0 0 0px $background,
        0 0 0 1px $primary;
    }
    25% {
        transform: scale(1.2);
        box-shadow: 
        0 0 0 10px rgba(128, 0, 0, 0.33),
        0 0 0 7px $background,
        0 0 0 8px $primary;
    }
    50% {
        box-shadow:
        0 0 0 8px rgba(128, 0, 0, 0.33),
        0 0 0 14px $background,
        0 0 0 15px $primary;
    }
    75% {
        box-shadow:
        0 0 0 6px rgba(128, 0, 0, 0.33),
        0 0 0 14px $background,
        0 0 0 15px $background;
    }
    100% {
        transform: scale(1);
        box-shadow: 
        0 0 0 5px rgba(128, 0, 0, 0),
        0 0 0 16px $background,
        0 0 0 17px $background;
    }
}

</style>

