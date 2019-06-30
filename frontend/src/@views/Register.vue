<template>
    <div>
        <h2>Register:</h2>
        <el-form @submit.prevent="register" style="max-width: 400px" class="mx-auto">
            <el-form-item label="Name">
                <el-input v-model="name"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
                <el-input type="password" v-model="password"></el-input>
            </el-form-item>
            <el-form-item label="Password confirmation">
                <el-input type="password" v-model="password_confirmation"></el-input>
            </el-form-item>
            <el-button type="primary" @click="register">
                Register now
            </el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'Register',
        data () {
            return {
                email: '',
                name: '',
                password: '',
                password_confirmation: ''
            }
        },
        methods: {
            register () {
                this.$store.dispatch('register', {
                    email: this.email,
                    name: this.name,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
            }
        }

    }
</script>