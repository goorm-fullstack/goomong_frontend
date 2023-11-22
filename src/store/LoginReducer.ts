
import { SET_LOGIN_STATUS } from '../types/ActionTypes';
import { LoginAction } from './LoginActions';

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

const loginReducer = (state: LoginState = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
