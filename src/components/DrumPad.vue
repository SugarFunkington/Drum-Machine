<template>
    <div class="column is-4">
        <div class="has-background-primary">
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
        ]
    }
</script>

<style>
* {
    border:1px dashed black;
}
</style>

