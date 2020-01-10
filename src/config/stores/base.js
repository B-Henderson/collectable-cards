import axios from 'axios'
const baseStore = {
    state: {
        loading: false,
        cards: [
            {
                id: 1,
                title: "Greyfriars Bobby",
                imageFront: 'greyfriars-bobby-front.png',
                imageBack: 'greyfriars-bobby-back.png',
            },
            {
                id: 2,
                title: 'Robert the Bruce',
                imageFront: 'robert-bruce-front.png',
                imageBack: 'robert-bruce-back.png',
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
            {
                id: 5,
            },
            {
                id: 6,
            },
            {
                id: 7,
            },
            {
                id: 8,
            },
        ],
    },
    mutations: {
        setLoading(state, status) {
            state.loading = status
        },
        setCards(state, cards) {
            state.cards = cards
        },
    },
    actions: {
        fetchCards(context) {
            context.commit('setLoading', true)
        },
    },
    getters: {
        getUserCards(state) {
            return state.cards.filter(card => card.collected)
        },
    },
}

export default baseStore
