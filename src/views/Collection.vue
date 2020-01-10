<template>
    <div class="collection">
        <h1 class="heading1">Your collection</h1>
        <!-- <card></card> -->
        <div class="preview-wrapper">
            <card-preview
                v-for="card in $store.state.base.cards"
                :key="card.id"
                :card-details="card"
            ></card-preview>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import CardPreview from '../components/CardPreview.vue'

export default {
    components: { Card, CardPreview },
}
</script>

<style lang="scss">
.collection {
    width: 100%;
}

.preview-wrapper {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    width: 100%;
}
</style>
