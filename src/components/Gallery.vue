<template>
  <div>
    <img src="@/assets/toyota.jpg"/>
    <h2>
      {{$store.state.car_info.brand}} {{$store.state.car_info.model}}
    </h2>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  img {
    width: 350px;
  }
</style>