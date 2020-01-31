<template>
    <div class="home">
        <header>
            <img
                src="../assets/wee-gaitherers-logo.png"
                alt="wee gaitherers logo"
                class="home__logo"
            />
        </header>
        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
    components: {
        Navigation,
    },
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;

    &__logo {
        padding: 80px 20px;
        width: 100%;
    }
}
</style>
