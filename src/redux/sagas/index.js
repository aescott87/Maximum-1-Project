import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getSaga from './getSaga';
import putStepSaga from './putStepSaga';
import deleteSaga from './deleteSaga';
import addTreeSaga from './addTreeSaga';
import userStatusSaga from './userStatusSaga';
import searchTreeSaga from './searchTreeSaga';
import ratingSaga from './ratingSaga'


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    getSaga(),
    putStepSaga(),
    deleteSaga(),
    addTreeSaga(),
    userStatusSaga(),
    searchTreeSaga(),
    ratingSaga(),

  ]);
}
