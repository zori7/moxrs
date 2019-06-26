<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1 v-if="currentTime">{{ currentTime.toLocaleTimeString() }}</h1>
    </div>
</template>

<script>

    export default {
        name: 'home',
        data() {
            return {
                currentTime: null
            }
        },
        mounted() {
            this.getTime();
            setInterval(this.getTime, 1000);
        },
        methods: {
            getTime() {
                axios.get('api/time').then(res => {
                    this.currentTime = new Date(res.data.time);
                })
            }
        }
    }
</script>
