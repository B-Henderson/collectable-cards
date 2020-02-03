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
@font-face {
    font-family: 'hewitt';
    src: url('./assets/Fonts/cooper-hewitt/CooperHewitt-Medium.otf')
        format('opentype');
}
@font-face {
    font-family: 'hewitt';
    font-weight: bold;
    src: url('./assets/Fonts/cooper-hewitt/CooperHewitt-bold.otf')
        format('opentype');
}
@font-face {
    font-family: 'montserrat';
    src: url('./assets/Fonts/montserrat/Montserrat-Medium.otf')
        format('opentype');
}
@font-face {
    font-family: 'montserrat';
    font-weight: bold;
    src: url('./assets/Fonts/montserrat/Montserrat-Bold.otf') format('opentype');
}
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
    background-color: rgba(223, 223, 223, 0);
    box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    height: 100%;
    position: relative;
    overflow: hidden;
    font-family: 'hewitt';
    width: 100%;
    background-image: url('./assets/App Skin Assets/Universal/Wood-Background.jpg');
    background-size: contain;
    @media (min-width: 576px) {
        height: 731px;
        width: 411px;
    }
}

a[href='#'] {
    cursor: not-allowed;
}

header {
    position: relative;
    font-family: 'montserrat';
    font-weight: bold;
    padding-top: 30px;
    .navigation__back {
        position: absolute;
        top: 12px;
    }
    span {
        font-size: 3rem;

        color: #fff;

        text-align: center;

        top: 40%;

        transform: rotate(-35deg);

        left: -2%;

        position: absolute;
    }
}

.heading1 {
    color: #fff;
    font-size: 3em;
    text-align: center;
    margin-bottom: 10px;
    // background-image: url('./assets/App Skin Assets/Front of Card/Card-Name-Plate.jpg');
    // background-size: cover;
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
        // padding: 0 15px 0 30px;
        position: relative;
        width: 100%;
        .home,
        .leaderboard {
            padding: 0 30px;
        }
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
