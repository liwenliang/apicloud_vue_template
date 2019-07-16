import store from 'store'

const TokenKey = 'supplyCabinet-token' // 不同app最好弄成不一样的key

export function getToken() {
  return store.get(TokenKey)
}

export function setToken(token) {
  return store.set(TokenKey, token)
}

export function removeToken() {
  return store.remove(TokenKey)
}
