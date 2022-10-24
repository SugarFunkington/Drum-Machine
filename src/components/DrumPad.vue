<template>
    <div class="column is-4">
        <div class="drumpad" :class="{pressed: isPressed}" @click="playDrum($event)" @keypress="playDrum(e)">
            <p class="is-size-3 
                        has-text-centered 
                        has-text-dark">
                            {{drum.keybind.toUpperCase()}}
                        </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DrumPad',
        props: [
            'drum'
        ],
        data () {
            return {
                isPressed: false
            }
        },
        methods: {
            playDrum(e) {
                if (e.key === this.drum.keybind || e.type === "click") {
                    this.isPressed = true

                    const drumSound = new Audio("./src/assets/sounds/" + this.drum.sound + ".mp3")

                    drumSound.play()

                    setTimeout(() => {
                        this.isPressed = false
                    }, 200)      
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
    padding:40px 0px;
    border-radius:8px;
    background:linear-gradient(#cacaca, #595959);
}

.pressed {
    border: 2px solid red;
}

.drumpad:hover {
    cursor:pointer;
}

</style>

