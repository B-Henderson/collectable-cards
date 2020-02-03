<template>
    <div class="navigation">
        <router-link
            v-for="route in routes"
            :to="route.link"
            :key="route.text"
            class="navigation__item"
        >
            {{ route.text }}
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        routes: Array,
    },
}
</script>
<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 100%;

    &__item {
        background-color: rgba(0, 0, 0, 0);
        color: #fff;
        cursor: pointer;
        font-size: 1.5em;
        margin-bottom: 20px;
        padding: 25px 0;
        text-align: center;
        text-decoration: none;
        width: 100%;
        background-image: url('../assets/App Skin Assets/Universal/Stone-background-(menu-and-leaderboard).png');
        background-size: contain;
        box-sizing: border-box;
        background-repeat: no-repeat;
        &.router-link-exact-active,
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
