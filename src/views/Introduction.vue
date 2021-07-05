<template>
  <div id="introduction">
    <Gallery />
    <div class="content">
      {{ $store.state.car_info.introduction }}
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