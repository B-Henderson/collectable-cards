<template>
    <div :class="{ 'leaderboard-card': true, top3: data.position < 4 }">
        <div class="leaderboard-card__position">
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
                cards<br />
                collected
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
    background-color: #d9d9d9;
    margin-bottom: 15px;
    position: relative;
    width: 100%;
    background-image: url('../assets/App Skin Assets/Leaderboard/Rank-4+-background.png');
    background-size: 100% 100%;
    &.top3 {
        background-image: url('../assets/App Skin Assets/Leaderboard/Top-3-Rank-background.png');
        background-size: 100% 100%;
    }

    &__position {
        align-items: center;
        background-color: #696969;
        color: #d9d9d9;
        display: flex;
        font-size: 1.2em;
        font-weight: bold;
        height: 30px;
        // padding: 7px 15px 7px 7px;
        padding: 0 10px;
        position: absolute;
        top: 26px;
        left: 0;
        width: 45px;

        span {
            font-size: 0.8em;
            position: absolute;
            top: 3px;
            left: 20px;
        }
    }

    &__content {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        width: 100%;
    }

    &__image {
        background-color: black;
        background-image: url(../assets/default-profile.jpg);
        background-position: center;
        background-size: cover;
        height: 70px;
        width: 70px;
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
