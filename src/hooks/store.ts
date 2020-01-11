import { createContext, useContext } from 'react'

import HeaderStore from '../components/Header/store'
import LoginStore from '../containers/Login/store'
import HomeStore from '../containers/Home/store'

export const storesContext = createContext({
  headerStore: new HeaderStore(),
  loginStore: new LoginStore(),
  homeStore: new HomeStore()
})

export const useStore = () => {
  const store = useContext(storesContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
