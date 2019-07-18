const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,

  beforeGridObj: state => state.app.beforeGridObj,
  gridObj: state => state.app.gridObj
}
export default getters
