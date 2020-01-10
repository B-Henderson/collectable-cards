<template>
    <div class="leaderboard-card">
        <div class="leaderboard-card__position">{{ data.position }}</div>
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

    &__position {
        background-color: #696969;
        color: #d9d9d9;
        font-size: 1.2em;
        font-weight: bold;
        padding: 7px 15px 7px 7px;
        position: absolute;
        top: 26px;
        left: 0;
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
