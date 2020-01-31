<template>
    <a
        :href="cardDetails.title ? '/#/card/' + cardDetails.id : '#'"
        class="preview-card"
        :style="[
            cardDetails.imageFront
                ? {
                      backgroundImage:
                          'url(' +
                          require(`../assets/${cardDetails.imagePreview}`) +
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
    background-size: cover;
    height: 330px;
    width: 100%;
}
</style>
