export const generateId = () => {
  const random = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)
  return date + random
}

export const loadLocalStorage = (key) => key && JSON.parse(window.localStorage.getItem(key)) || []
export const saveLocalStorage = (key, data) => data && key && window.localStorage.setItem(key, JSON.stringify(data)) 