const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,

  movieInfo: state => state.movie.movieInfo
}
export default getters
