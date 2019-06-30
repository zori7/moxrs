<template>
    <div class="home">
        <h2 v-if="$store.state.user">Hello, {{ $store.state.user.name }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
