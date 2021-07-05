<template>
  <div id="spec">
    <Gallery />
    <ul id="list">
      <li v-for="(value, key, index) in $store.state.car_info.spec" :key="index">
        <b>{{key}}</b> : <i>{{value}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery';
export default {
  components: {
    Gallery
  }
}
</script>

<style scoped>
  #list {
    list-style: none;
    font-size: 16px;
  }
</style>