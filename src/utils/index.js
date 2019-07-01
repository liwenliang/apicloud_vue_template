export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function showProgress() {
  if (window.api && window.api.showProgress) {
    window.api.showProgress()
  }
}

export function hideProgress() {
  if (window.api && window.api.hideProgress) {
    window.api.hideProgress()
  }
}
