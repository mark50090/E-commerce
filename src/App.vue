<template>
<div class="main">
  <Toobar />
  <div class="h-96"></div>
  <router-view/>
</div>
</template>

<script>
import Toobar from './components/TooBar.vue'
export default {
  components: {
    Toobar
  }
}
</script>

<style>
</style>
