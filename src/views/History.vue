<template>
  <div id="history">
    <Gallery />
    <div class="content">
      {{ $store.state.car_info.history }}
    </div>
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