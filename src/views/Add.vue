<template>
    <div class="add">
            <router-link to="/" class="navigation__back">
                <img src="../assets/stone-back-button.png" alt="" />
            </router-link>
        <h1 data-v-fae5bece="" class="heading1">Add a card</h1>
        <navigation :routes="routes"></navigation>
    </div>
</template>
<script>
import Navigation from '../components/Navigation.vue'
export default {
    components: {
        Navigation,
    },
    data() {
        return {
            routes: [],
        }
    },
    beforeMount() {
        this.routes = this.$store.state.base.subRoutes.add
    },
}
</script>
<style lang="scss" scoped>
.add {
    width: 100%;
    padding: 30px 0px;
}
</style>
