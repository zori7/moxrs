<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 v-if="currentTime">{{ currentTime.toLocaleTimeString() }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
  	return {
  		currentTime: null
  	}
  },
  mounted () {
  	axios.get('api/time').then(res => {
  		this.currentTime = new Date(res.data.time);
  	})
  }
}
</script>
