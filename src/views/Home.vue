<template>
    <div class="home">
        <header>
            <img
                src="../assets/wee-gaitherers-logo.png"
                alt="wee gaitherers logo"
                class="home__logo"
            />
        </header>
        <navigation :routes="routes"></navigation>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
    components: {
        Navigation,
    },
    data: function() {
        return {
            routes: [],
            homepage: true,
        }
    },
    beforeMount() {
        this.routes = this.$store.state.base.routelinks
    },
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;

    &__logo {
        padding: 35px 20px;
        width: 100%;
    }
}
.hometitle {
    padding-left: 50px;
}
</style>
