import {
  CHANGE_AUTH,
  SET_ROLE,
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER
} from '../actions';

// const initialState = {
//   authenticated: !!window.localStorage.getItem('token'),
//   role: 'donor',
//   token: window.localStorage.getItem('token')
// };

export default function(state = {}, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, ...action.payload };
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case SET_ROLE:
      return { ...state, role: action.payload };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
