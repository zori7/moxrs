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
            setTimeout(() => {
                this.$store.dispatch('auth/logout').then(() => {
                    this.$router.push({ name: 'login' })
                })
            }, 1000)
        }
    }
</script>

<style scoped>

</style>