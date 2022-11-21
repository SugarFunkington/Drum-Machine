<template>
    <div  v-if="(drum.drumbeat !== '')" class="drumbeat-playback has-text-light has-text-centered is-unselectable"
        :class="{'position-set':this.$props.loopStarted, 'not-first-loop':this.store.loops.indexOf(this.loop)}">
        {{drum.drumbeat.toUpperCase()}}
    </div>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

export default {
    name: "DrumbeatPreview",
    props: [
        'index', 'drum', 'loop', 'playingLoop', 'loopStarted', 'parentBox'
    ],
    data() {
        return {
            left:0,
            store: useLoopStore()
        }
    },
    mounted() {
        if (this.store.loops.indexOf(this.loop)) {
            this.setDrumbeatPosition(this.store.loopDuration, this.parentBox)
        }
    },
    methods: {
        setDrumbeatPosition(loopLength, parentBox) {
            const currentDrumbeat = document.getElementsByClassName('drumbeat-playback')
            const currentLeft = currentDrumbeat[this.$props.index].getBoundingClientRect().left

            let drumbeatPause = this.loop.reduce((pV, cV, index) => {
                if (index <= this.$props.index) {
                    return pV + cV.pause
                }
                return pV
            }, 0)

            let percentageLeft = drumbeatPause / loopLength

            if (percentageLeft > 0.90) {
                percentageLeft = 0.90
            }

            if (this.store.loops.indexOf(this.loop)) {
                this.left = percentageLeft * 100
            } else {
                let newLeftPosition = (parentBox[0].width * percentageLeft) + parentBox[0].left
    
                this.left = newLeftPosition - currentLeft
            }
        }
    }
}
</script>

<style scoped lang="scss">
.drumbeat-playback {
    display:inline-block;
    border:1px solid $dark;
    border-radius:100%;
    padding-top:2px;
    margin:4px;
    height:32px;
    width:32px;
    background-color:$background;
    transition: all 0.3s ease;
    position:relative;
    left:0;
}

.position-set {
    position:relative;
    left:v-bind('left + "px"');
}

.not-first-loop {
    position:absolute;
    left:v-bind('left + "%"');
    transition:none;
}
</style>