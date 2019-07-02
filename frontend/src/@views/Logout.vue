<template>
    <div>
        <span>
            Please wait...
        </span>
    </div>
</template>

<script>
    export default {
        name: "Logout",
        mounted () {
            this.$store.dispatch('auth/logout').then(() => {
                this.$router.push({ name: 'login' })
            })
        }
    }
</script>

<style scoped>

</style>