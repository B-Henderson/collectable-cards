<template>
    <div class="leaderboard-card">
        <div
            :class="[
                'leaderboard-card__position',
                data.position === '1' ||
                data.position === '2' ||
                data.position === '3'
                    ? 'leaderboard-card__position--top-three'
                    : '',
            ]"
        >
            {{ data.position }}
            <span>{{ data.ordinal }}</span>
        </div>
        <div class="leaderboard-card__content">
            <div
                class="leaderboard-card__image"
                :style="[
                    data.profileImage
                        ? {
                              backgroundImage:
                                  'url(' +
                                  require(`../assets/${data.profileImage}`) +
                                  ')',
                          }
                        : {},
                ]"
            ></div>
            <div class="leaderboard-card__username">{{ data.username }}</div>
            <div class="leaderboard-card__cards-collected">
                <span class="leaderboard-card__cards-collected__number">{{
                    data.cardsCollected
                }}</span>
                <br />
                points
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.leaderboard-card {
    background-color: transparent;
    background-image: url(../assets/stone-background.png);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 15px;
    max-height: 85px;
    position: relative;
    width: 100%;

    &__position {
        align-items: center;
        background-color: #696969;
        background-image: url(../assets/rank-background.png);
        background-size: cover;
        color: #d9d9d9;
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
        height: 30px;
        padding: 0 10px;
        position: absolute;
        top: 10px;
        left: -7px;
        width: 45px;

        &--top-three {
            background-image: url(../assets/top-rank-background.png);
        }

        span {
            font-size: 0.8em;
            position: absolute;
            top: 3px;
            left: 20px;
        }
    }

    &__content {
        align-items: center;
        color: white;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        width: 100%;
    }

    &__image {
        background-color: white;
        background-image: url(../assets/default-profile.jpg);
        background-position: center;
        background-size: cover;
        height: 65px;
        width: 65px;
    }

    &__username {
        font-size: 1.5em;
        font-weight: bold;
    }

    &__cards-collected {
        text-align: center;

        &__number {
            font-size: 1.5em;
            font-weight: bold;
        }
    }
}
</style>
