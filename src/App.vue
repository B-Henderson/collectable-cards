<template>
    <div class="app-content">
        <div class="card-collection__body">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
    components: {
        Navigation
    },
}
</script>

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
	box-shadow: 0 12px 15px 0 rgba(0, 0, 0, .24), 0 17px 50px 0 rgba(0, 0, 0, .19);
	height: 100%;
    position: relative;
	overflow: hidden;
	width: 100%;

    @media (min-width: 576px) {
        height: 731px;
        width: 411px;
    }
}

.heading1 {
    text-align: center;
}

.app-content {
    height: calc(100% - 78px);
}

.card-collection {
	&__body {
		display: flex;
        height: 100%;
		justify-content: center;
        overflow: auto;
        padding: 0 30px;
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
