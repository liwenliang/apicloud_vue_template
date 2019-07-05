const movie = {
  namespaced: true,
  state: {
    movieInfo: {
      page: 1,
      total: 0,
      movieList: []
    }
  },
  mutations: {
    setMovieInfo(state, value) {
      state.movieInfo = value
    }
  },
  actions: {
  }
}

export default movie
