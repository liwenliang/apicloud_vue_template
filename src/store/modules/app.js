const app = {
  namespaced: true,
  state: {
    beforeGridObj: {},
    gridObj: {}
  },
  mutations: {
    setBeforeGridObj(state, gridObj) {
      state.beforeGridObj = JSON.parse(JSON.stringify(gridObj))
    },

    setGridObj(state, gridObj) {
      state.gridObj = JSON.parse(JSON.stringify(gridObj))
    }
  },
  actions: {
  }
}

export default app
