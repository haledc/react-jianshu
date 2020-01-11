import { observable, action } from 'mobx'

interface User {
  username: string
  password: string
}

class LoginStore {
  @observable user: User = { username: '', password: '' }
  @observable isLogin: boolean = false

  @action.bound
  setUser(user: User) {
    this.user = user
  }

  @action.bound
  setLoginStatus(status: boolean) {
    this.isLogin = status
  }
}

export default LoginStore
