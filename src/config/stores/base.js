import axios from 'axios';
const baseStore = {
  state: {
    loading: false,
    cards: []
  },
  mutations: {
    setLoading(state, status) {
      state.loading = status;
    },
    setCards(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    fetchCards(context) {
      context.commit('setLoading', true);
    }
  },
  getters: {
    getUserCards(state) {
      return state.cards.filter(card => card.collected);
    }
  }
};
export default baseStore;
