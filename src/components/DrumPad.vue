<template>
    <div class="column is-4">
        <div class="drumpad" :class="{pressed: isPressed}" @click="playDrum($event)" @keypress="playDrum(e)">
            <p class="is-size-3 
                        has-text-centered 
                        has-text-dark">
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
    background:linear-gradient(#cacaca, #595959);
}

.pressed {
    border: 2px solid $primary;
}

.drumpad:hover {
    cursor:pointer;
}

</style>

