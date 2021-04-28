import {all, takeLatest} from 'redux-saga/effects';

import {UserTypes} from './userProfile/types';
import {load} from './userProfile/sagas';

export default function* rootSaga(): any{
  return yield all([takeLatest(UserTypes.LOAD_REQUEST, load)]);
}