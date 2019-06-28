const movie = {
  namespaced: true,
  state: {
    movieInfo: {
      page: 1,
      page_size: 20,
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
