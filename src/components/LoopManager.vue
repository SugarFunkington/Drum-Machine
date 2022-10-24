<template>
        <button class="button" @click="this.recording = !this.recording" :class="{recording: this.recording}">Start Loop</button>
</template>

<script>
export default {
    name: 'LoopManager',
    data () {
        return {
            recording: false
        }
    }
}
</script>

<style>
.recording {
    border: 1px solid red !important;
}
</style>