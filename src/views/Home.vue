<template>
    <div class="home">
        <header>
            <h1 class="heading1">Wee Gaitherers</h1>
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
}
</style>
