import {action} from 'typesafe-actions';
import {UserTypes, User, Repository} from './types';

export const loadRequest = () => action(UserTypes.LOAD_REQUEST);

export const loadSuccess = (data: User, repositories: Repository[]) => action(UserTypes.LOAD_SUCCESS, {data, repositories});

export const loadFailure = () => action(UserTypes.LOAD_FAILURE);