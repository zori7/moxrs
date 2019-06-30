<template>
    <div class="home">
        <h2 v-if="user">Hello, {{ user.name }}</h2>
        <el-button @click="logout">Logout</el-button>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                currentTime: null,
                intervalId: null,
                user: null
            }
        },
        mounted() {
            if (this.$store.getters.loggedIn)
                this.user = this.$store.state.user
        },
        beforeDestroy() {
            clearInterval(this.intervalId)
        },
        methods: {
            logout () {
                this.$store.dispatch('logout')
            }
        }
    }
</script>
