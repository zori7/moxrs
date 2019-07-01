<template>
    <div>
        <h2>Login:</h2>
        <el-form @submit.prevent="login" style="max-width: 400px" class="mx-auto">
            <el-form-item label="Email">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="login">
                Login
            </el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                }).then(() => {
                    this.$router.push({ name: 'home' })
                })
            }
        }
    }
</script>

<style scoped>

</style>