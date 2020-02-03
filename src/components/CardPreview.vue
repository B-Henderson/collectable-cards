<template>
    <a
        :href="cardDetails.title ? '/#/card/' + cardDetails.id : '#'"
        class="preview-card"
        :style="[
            cardDetails.imageFront
                ? {
                      backgroundImage:
                          'url(' +
                          require(`../assets/${cardDetails.imageFront}`) +
                          ')',
                  }
                : {},
        ]"
    ></a>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        cardDetails: {
            type: Object,
            requried: true,
        },
    },
}
</script>

<style lang="scss">
.preview-card {
    background-image: url(../assets/default-card.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 285px;
    width: 100%;
}
</style>
