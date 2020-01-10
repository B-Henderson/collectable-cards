<template>
    <div>
        <card :card-id="id"></card>
    </div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    components: { Card },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
}
</script>
