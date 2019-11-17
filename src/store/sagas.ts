import { all, fork } from 'redux-saga/effects'

import { saga as headerSaga } from '../components/Header/store'
import { saga as homeSaga } from '../containers/Home/store'
import { saga as loginSaga } from '../containers/Login/store'
import { saga as detailSaga } from '../containers/Detail/store'

export default function* rootSaga() {
  yield all([
    fork(headerSaga),
    fork(homeSaga),
    fork(loginSaga),
    fork(detailSaga)
  ])
}
