<template>
    <div class="home">
        <h2 v-if="$store.state.auth.user">Hello, {{ $store.state.auth.user.name }}</h2>
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
