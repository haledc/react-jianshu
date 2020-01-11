import { observable, action } from 'mobx'

class HeaderStore {
  @observable focused: boolean = false
  @observable mouseIn: boolean = false
  @observable list: string[] = []
  @observable page: number = 1
  @observable totalPage: number = 1

  @action.bound
  setFocused(status: boolean) {
    this.focused = status
  }

  @action.bound
  setMouseIn(status: boolean) {
    this.mouseIn = status
  }

  @action.bound
  setList(list: string[]) {
    this.list = list
  }

  @action.bound
  setPage(page: number) {
    this.page = page
  }

  @action.bound
  setTotalPage(page: number) {
    this.totalPage = page
  }
}

export default HeaderStore
