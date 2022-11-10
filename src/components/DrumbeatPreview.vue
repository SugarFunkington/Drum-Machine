<template>
    <div class="drumbeat-playback has-text-light has-text-centered is-unselectable"
        :class="{'position-set':this.$props.playingLoop}">
        {{drum.drumbeat.toUpperCase()}}
    </div>
</template>

<script>
export default {
    name: "DrumbeatPreview",
    props: [
        'index', 'drum', 'loop', 'playingLoop'
    ],
    data() {
        return {
            left:0
        }
    },
    methods: {
        setDrumbeatPosition(loopLength) {
            let drumbeatPause = this.loop.reduce((pV, cV, index) => {
                if (index <= this.$props.index) {
                    return pV + cV.pause
                }
                return pV
            }, 0)

            this.left = Math.round((drumbeatPause / loopLength) * 100)
            
        }
    }
}
</script>

<style scoped lang="scss">
.drumbeat-playback {
    display:inline-block;
    border:1px solid $dark;
    border-radius:100%;
    padding:2px 9px;
    margin:4px;
    background-color:$background;
    transition: all 0.3s ease;
    position:relative;
    left:0;
}

.position-set {
    position:absolute;
    left:v-bind('left + "%"');
}
</style>