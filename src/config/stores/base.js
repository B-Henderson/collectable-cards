import axios from 'axios'
const baseStore = {
    state: {
        loading: false,
        cards: [
            {
                id: 1,
                title: 'Greyfriars Bobby',
                imagePreview: '',
                imageFront: 'greyfriars-bobby-front.png',
                imageBack: 'greyfriars-bobby-back.png',
            },
            {
                id: 2,
                title: 'Robert the Bruce',
                imagePreview: 'robert-the-bruce-preview.jpg',
                imageFront: 'robert-the-bruce-card-front.jpg',
                imageBack: 'robert-the-bruce-card-back.jpg',
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
        leaderboardData: [
            {
                profileImage: 'fill-murray.jpg',
                position: '1',
                ordinal: 'st',
                username: 'Venkman',
                cardsCollected: 12,
            },
            {
                position: '2',
                ordinal: 'nd',
                username: 'Cyclone',
                cardsCollected: 10,
            },
            {
                profileImage: 'place-cage.jpg',
                position: '3',
                ordinal: 'rd',
                username: 'DoomAir',
                cardsCollected: 9,
            },
            {
                position: '4',
                ordinal: 'th',
                username: 'FunBit',
                cardsCollected: 7,
            },
            {
                profileImage: 'place-keanu.svg',
                position: '5',
                ordinal: 'rd',
                username: 'JohnWick',
                cardsCollected: 7,
            },
            {
                position: '6',
                ordinal: 'th',
                username: 'BitFun',
                cardsCollected: 6,
            },
            {
                position: '7',
                ordinal: 'th',
                username: 'Cheesecake',
                cardsCollected: 1,
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
