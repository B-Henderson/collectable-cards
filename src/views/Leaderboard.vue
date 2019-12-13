<template>
    <div class="leaderboard">
        <h1 class="heading1">Leaderboard</h1>
        <transition-group
            tag="div"
            name="slide-in"
            :style="{ '--total': leaderboardData.length }"
        >
            <template v-for="(item, index) in leaderboardData">
                <div 
                    :key="index"
                    :style="{'--i': index}"
                    v-if="showItems"
                >
                    <leaderboard-card 
                        :data="item"
                        :data-index="index"
                        class="leaderboard-card"
                    ></leaderboard-card>
                </div>
            </template>
        </transition-group>
        <img src="" alt="">
    </div>
</template>

<script>
import LeaderboardCard from '../components/LeaderboardCard.vue'

export default {
    components: { LeaderboardCard },
    data: function () {
    	return {
            leaderboardData: [
                {
                    profileImage: 'fill-murray.jpg',
                    position: '1st',
                    username: 'Venkman',
                    cardsCollected: 12
                },
                {
                    position: '2nd',
                    username: 'Cyclone',
                    cardsCollected: 9
                },
                {
                    profileImage: 'place-cage.jpg',
                    position: '3rd',
                    username: 'DoomAir',
                    cardsCollected: 7
                },
                {
                    position: '4th',
                    username: 'BitFun',
                    cardsCollected: 4
                },
                {
                    profileImage: 'place-keanu.svg',
                    position: '5rd',
                    username: 'JohnWick',
                    cardsCollected: 7
                },
                {
                    position: '6th',
                    username: 'BitFun',
                    cardsCollected: 4
                },
                {
                    position: '7th',
                    username: 'Cheesecake',
                    cardsCollected: 1
                },
            ],
            showItems: false
        }
    },
    mounted: function () {
        this.$nextTick(() => { this.showItems = true })
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
        transition: opacity .4s linear, transform .4s cubic-bezier(.5, 0, .7, .4);
        transition-delay: calc( 0.3s * (var(--total) - var(--i)) );
    }

    &-enter-active {
        transition: opacity 1s linear, transform 1.5s cubic-bezier(.2, .5, .1, 1);
        transition-delay: calc( 0.3s * var(--i) );
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