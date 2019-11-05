<template>
  <div class="card-collection__body">
    <router-view></router-view>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: rgb(223, 223, 223);
}
.card-collection {
  &__body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
