<template>
    <div class="navigation">
        <router-link to="/collection" class="navigation__item">
            Collection
        </router-link>
        <router-link to="/leaderboard" class="navigation__item">
            Leaderboard
        </router-link>
        <a href="#" class="navigation__item">
            Account
        </a>
        <router-link to="/locations" class="navigation__item">
            Locations
        </router-link>
        <router-link to="/scan" class="navigation__item">
            Add a card
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 100%;

    &__item {
        background-color: #c6c6c6;
        color: #fff;
        cursor: pointer;
        font-size: 1.5em;
        margin-bottom: 20px;
        padding: 15px 0;
        text-align: center;
        text-decoration: none;
        width: 100%;

        &.router-link-exact-active,
        &:hover {
            background-color: #696969;
        }
    }
}
</style>
