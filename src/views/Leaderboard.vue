<template>
    <div class="leaderboard">
        <h1 class="heading1">Leaderboard</h1>
        <transition-group
            tag="div"
            name="slide-in"
            :style="{ '--total': $store.state.base.leaderboardData.length }"
        >
            <template
                v-for="(item, index) in $store.state.base.leaderboardData"
            >
                <div :key="index" :style="{ '--i': index }" v-if="showItems">
                    <leaderboard-card
                        :data="item"
                        :data-index="index"
                        class="leaderboard-card"
                    ></leaderboard-card>
                </div>
            </template>
        </transition-group>
        <img src="" alt="" />
    </div>
</template>

<script>
import LeaderboardCard from '../components/LeaderboardCard.vue'

export default {
    components: { LeaderboardCard },
    data: function() {
        return {
            showItems: false,
        }
    },
    mounted: function() {
        this.$nextTick(() => {
            this.showItems = true
        })
    },
}
</script>

<style lang="scss" scoped>
.leaderboard {
    width: 100%;
}

.slide-in {
    &-move {
        transition: opacity 1s linear, transform 1s ease-in-out;
    }

    &-leave-active {
        transition: opacity 0.4s linear,
            transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4);
        transition-delay: calc(0.3s * (var(--total) - var(--i)));
    }

    &-enter-active {
        transition: opacity 1s linear,
            transform 1.5s cubic-bezier(0.2, 0.5, 0.1, 1);
        transition-delay: calc(0.3s * var(--i));
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }

    &-enter {
        transform: translateY(5em);
    }

    &-leave-to {
        transform: translateY(3em);
    }
}
</style>
