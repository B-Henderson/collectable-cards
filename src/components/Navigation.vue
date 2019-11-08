<template>
    <div class="navigation">
        <router-link to="/" class="navigation__item">Home</router-link>
        <router-link to="/collection" class="navigation__item">Collection</router-link>
        <router-link to="/leaderboard" class="navigation__item">Leaderboard</router-link>
        <router-link to="/settings" class="navigation__item">Settings</router-link>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    display: flex;
    font-weight: bold;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    &__item {
        background-color: #C6C6C6;
        border-right: 1px solid #000;
        color: #fff;
        cursor: pointer;
        padding: 30px 0;
        text-align: center;
        text-decoration: none;
        width: calc(100% / 4);

        &:last-child {
            border-right: none;
        }

        &.router-link-exact-active,
        &:hover {
            background-color: #696969;
        }
    }
}
</style>
