<template>
    <div class="collection">
        <header>
            <router-link to="/" class="navigation__back">
                <img src="../assets/stone-back-button.png" alt="" />
            </router-link>
            <h1 class="heading1">Collection</h1>
        </header>
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
import CardPreview from '../components/CardPreview.vue'

export default {
    components: { CardPreview },
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

.navigation__back {
    img {
        width: 55px;
        margin: -10px 10px;
    }
}
</style>
