import { all, fork } from 'redux-saga/effects'

import { saga as headerSaga } from '../components/header/store'
import { saga as homeSaga } from '../containers/home/store'
import { saga as loginSaga } from '../containers/login/store'
import { saga as detailSaga } from '../containers/detail/store'

export default function* rootSaga() {
  yield all([
    fork(headerSaga),
    fork(homeSaga),
    fork(loginSaga),
    fork(detailSaga)
  ])
}
