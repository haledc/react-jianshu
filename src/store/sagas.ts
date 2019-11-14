import { all, fork } from 'redux-saga/effects'

// @ts-ignore
import { saga as headerSaga } from '../components/Header/store'
import { saga as homeSaga } from '../containers/Home/store'
// @ts-ignore
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
