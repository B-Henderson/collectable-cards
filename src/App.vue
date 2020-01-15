<template>
    <div class="app-content">
        <div class="card-collection__body">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

html,
body {
    align-items: center;
    background: #666375;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
}

#app {
    background-color: rgb(223, 223, 223);
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    height: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;

    @media (min-width: 576px) {
        height: 731px;
        width: 411px;
    }
}

a[href="#"] {
    cursor: not-allowed;
}

header {
    position: relative;

    .navigation__back {
        position: absolute;
        top: 12px;
    }
}

.heading1 {
    color: #fff;
    font-size: 2em;
    text-align: center;
}

.app-content {
    height: 100%;
}

.card-collection {
    &__body {
        display: flex;
        height: 100%;
        justify-content: center;
        overflow: auto;
        overflow-x: hidden;
        padding: 0 15px 0 30px;
        position: relative;
        width: 100%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
