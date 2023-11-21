
import { Action } from 'redux';
import { SET_LOGIN_STATUS } from '../types/ActionTypes';

export interface LoginAction extends Action<string> {
  payload: boolean;
}

export const setLoginStatus = (isLoggedIn: boolean): LoginAction => ({
  type: SET_LOGIN_STATUS,
  payload: isLoggedIn,
});
