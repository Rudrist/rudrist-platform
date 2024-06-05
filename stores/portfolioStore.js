import { defineStore } from 'pinia';
// import { useNuxtApp } from '#app';
// const nuxtApp = useNuxtApp();

export const usePortfolioStore = defineStore('portfolio', {
    id: 'portfolio',
    state: () => ({
    user_type: 3,
    portfolios: [],
    portfolioNames: [],
    portfoliosSimplified: [],
    currentPortfolioId: '',
    currentPortfolioName: '',
    orders: [],
    positions: [],
    positionNames: []
  }),
  actions: {
    async fetchPortfolios() {
      setTimeout(async () => {
        try {
          const response = await useNuxtApp().$api.portfolio.getPortfolio(
              {}, {
                  headers: useRequestHeaders(["cookie"])
              }
          );
          this.portfolios = response.data;
          this.portfolioNames = this.portfolios.map(x => x.name)
          this.portfoliosSimplified = this.portfolios.map(item => {
            const x = item.positions.reduce((sum, position) => sum + parseInt(position.balance, 10), 0);
            return {
                id: item.id,
                name: item.name,
                amount: x
            };
          });
          console.log('this is fetchPOrtfolios', this.portfoliosSimplified)
        } catch (error) {
          console.error('Error fetching portfolios:', error);
          this.status = 'error';
        }
      }, 0.0000001)
    },
    updateUser (type) {
      this.user_type = type;
      console.log('this function is fired with account type', this.user_type)
    },

    // This also implements fetchOrders
    async getCurrentPortfolio(id, name) {
      this.currentPortfolioId = id;
      this.currentPortfolioName = name;
      try {
        const response = await useNuxtApp().$api.order.getOrder(
            {
              id: this.currentPortfolioId,
            }, {
                headers: useRequestHeaders(["cookie"])
            }
        );
        this.orders = response.data;
        const target = this.portfolios.find(x => x.id === this.currentPortfolioId)
        // console.log('This is fetchOrders', this.portfolios, this.orders, index)
        this.positions = target.positions
        this.positionNames = this.positions.map(x => x.symbol)
        // console.log('positionNames', this.positionNames, this.portfolioNames)
      } catch (error) {
        console.error('Error fetching orders:', error);
      }

    }
    // Additional actions can be added here if needed
  },
});
