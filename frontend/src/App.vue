<template>
  <el-container id="app">
    <el-header>
      <el-menu :default-active="$route.path" :router="true" class="el-menu-demo" mode="horizontal">
        <el-menu-item :route="{ name: 'home' }" index="home">Home</el-menu-item>
        <el-menu-item :route="{ name: 'posts' }" index="posts">Posts</el-menu-item>
        <el-submenu index="1" v-if="$store.getters['auth/loggedIn']">
          <template slot="title">
            <span v-if="$store.state.auth.user">
              {{ $store.state.auth.user.name }}
            </span>
            <span v-else>Loading...</span>
          </template>
          <el-menu-item :route="{ name: 'logout' }" index="logout">Log out</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="!$store.getters['auth/loggedIn']" index="login" :route="{ name: 'login' }">Log in</el-menu-item>
        <el-menu-item v-if="!$store.getters['auth/loggedIn']" index="register" :route="{ name: 'register' }">Register</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view :key="$route.fullPath" />
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "App",
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mx-auto {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
