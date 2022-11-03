<template>
    <div class="column is-4">
        <div class="drumpad" :class="{pressed: isPressed}" @click="playDrum($event)" @keypress="playDrum(e)">
            <p class="is-size-3 has-text-centered has-text-light">
                {{keybind.toUpperCase()}}
            </p>
        </div>
    </div>
</template>

<script>
import { useLoopStore } from '@/store/useLoop'

    export default {
        name: 'DrumPad',
        props: [
            'drumbeat', 'keybind'
        ],
        data () {
            return {
                isPressed: false,
                store: useLoopStore()
            }
        },
        methods: {
            playDrum(e) {
                if (e.key === this.keybind || e.type === "click") {
                    this.isPressed = true

                    const drumSound = new Audio("./src/assets/sounds/" + this.drumbeat + ".mp3")
                    drumSound.play()

                    setTimeout(() => {
                        this.isPressed = false
                    }, 200)
                    
                    if (this.store.loopRecording) {
                        this.store.addDrumbeat(this.keybind)
                    }
                }  
            }
        },
        created() {
            window.addEventListener('keydown', this.playDrum)
        }

    }
</script>

<style lang="scss">

.drumpad {
    padding:20px 0px;
    border-radius:8px;
    background:$background;
    filter:drop-shadow(0 0.2rem 0.35rem $primary);
    transition: 75ms;
    position:relative;
    top:0px;

    p {
        user-select:none;
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
}

.pressed {
    filter:drop-shadow(0 0.1rem 0.15rem $secondary);
    top:4px;
    background: linear-gradient(rgba(255,255,255,0.05), rgba(255,255,255,0.05)), $background;

}

.drumpad:hover {
    cursor:pointer;
}

</style>

