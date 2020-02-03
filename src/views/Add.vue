<template>
    <div class="add">
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
    padding: 0 30px;
}
</style>
