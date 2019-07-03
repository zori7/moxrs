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
            <el-form-item v-if="error">
                <span>{{ error }}</span>
            </el-form-item>
            <el-button type="primary" @click="attempt">
                Login
            </el-button>
        </el-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Login",
        data () {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            ...mapActions('auth', ['login']),
            attempt () {
                this.login({ email: this.email, password: this.password })
                    .then(res => { this.$router.push({ name: 'home' }) })
                    .catch(e => { this.error = e.response.data })
            }
        }
    }
</script>

<style scoped>

</style>