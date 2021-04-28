import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

import {loadSuccess, loadFailure} from './actions';

export function* load(): any{

  try {
    const response = yield call(api.get, 'users/Garticuno');
    const responseRep = yield call(api.get, 'users/Garticuno/repos');
    yield put(loadSuccess(response.data, responseRep.data));

  } catch (error) {
    yield put(loadFailure())
  }
}