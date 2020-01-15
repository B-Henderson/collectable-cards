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
        leaderboardData: [
            {
                profileImage: 'fill-murray.jpg',
                position: '1st',
                username: 'Venkman',
                cardsCollected: 12,
            },
            {
                position: '2nd',
                username: 'Cyclone',
                cardsCollected: 9,
            },
            {
                profileImage: 'place-cage.jpg',
                position: '3rd',
                username: 'DoomAir',
                cardsCollected: 7,
            },
            {
                position: '4th',
                username: 'BitFun',
                cardsCollected: 4,
            },
            {
                profileImage: 'place-keanu.svg',
                position: '5rd',
                username: 'JohnWick',
                cardsCollected: 7,
            },
            {
                position: '6th',
                username: 'BitFun',
                cardsCollected: 4,
            },
            {
                position: '7th',
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
