<template>
    <div class="home">
        <h2 v-if="$store.state.auth.user">Hello, {{ $store.state.auth.user.name }}</h2>
        <el-row :gutter="40">
            <el-col :span="12">
                <el-input  type="textarea" :autosize="true" v-model="mark" />
            </el-col>
            <el-col :span="12">
                <md :t="mark" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                mark: ''
            }
        }
    }
</script>

<style>
    p {
        text-align: justify;
    }
</style>
