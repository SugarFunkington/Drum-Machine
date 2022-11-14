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
        setDrumbeatPosition(loopLength, parentBox) {
            // NOT WORKING - need to check how the new left position is assigned
            const currentDrumbeat = document.getElementsByClassName('drumbeat-playback')
            const currentLeft = currentDrumbeat[this.$props.index].getBoundingClientRect().left

            let drumbeatPause = this.loop.reduce((pV, cV, index) => {
                if (index <= this.$props.index) {
                    return pV + cV.pause
                }
                return pV
            }, 0)

            let percentageLeft = drumbeatPause / loopLength

            if (percentageLeft > 0.75) {
                percentageLeft = 0.75
            } else if (percentageLeft < 0.25) {
                percentageLeft = 0.25
            }

            let newLeftPosition = (parentBox[0].width * percentageLeft) + parentBox[0].left

            console.log(currentLeft, newLeftPosition)

            this.left = newLeftPosition - currentLeft
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
    position:relative;
    left:v-bind('left + "px"');
}
</style>