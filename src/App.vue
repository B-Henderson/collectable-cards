<template>
  <div>
    <h1>Hello world App!</h1>
    <router-link to="/collection">Go to Collection</router-link>
    <router-link to="/scan">Go to Scan</router-link>
    <router-link to="/profile">Go to Profile</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Card from "./components/Card.vue";
export default {
  components: { Card }
};
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
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>