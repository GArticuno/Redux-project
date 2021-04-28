import { Reducer } from 'redux';
import {UserState, UserTypes} from './types';

const INITIAL_STATE: UserState = {
  data: {
    login: '',
    id: 0,
    avatar_url: '',
    html_url: '',
    name: '',
    blog: '',
    location: '',
    bio: '',
    public_repos: 0,
    followers: 0,
    following: 0
  },
  repositories:[],
  error: false,
  loading: false
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case UserTypes.LOAD_REQUEST:
      return{
        ...state, 
        loading: true 
      };
    case UserTypes.LOAD_SUCCESS:
      return{
        ...state, 
        loading: false, 
        error: false, 
        data: action.payload.data,
        repositories: action.payload.repositories,
      };
    case UserTypes.LOAD_FAILURE:
      return{...state, 
        loading: false, 
        error: true, 
        data: {
          login: '',
          id: 0,
          avatar_url: '',
          html_url: '',
          name: '',
          blog: '',
          location: '',
          bio: '',
          public_repos: 0,
          followers: 0,
          following: 0
        }, 
        repositories:[],
      };
    default:
      return state;
  }
}

export default reducer;