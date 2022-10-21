<template>
    <div class="column is-4">
        <div class="drumpad has-background-primary" @click="playDrum($event)" @keypress="playDrum(e)">
            <p class="is-size-3 
                        has-text-centered 
                        has-text-primary-light">
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
        methods: {
            playDrum(e) {
                if (e.key === this.drum.keybind || e.type === "click") {
                    const drumSound = new Audio("./src/assets/sounds/" + this.drum.sound + ".mp3")
                    drumSound.play()
                }  
            }
        },
        created() {
            window.addEventListener('keypress', this.playDrum)
        }

    }
</script>

<style lang="scss">
* {
    border:1px dashed black;
}

.drumpad:hover {
    cursor:pointer;
}

</style>

