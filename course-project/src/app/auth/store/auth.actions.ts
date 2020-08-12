import {Action} from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] Logout';
export const LOGIN_START = '[Auth] Login Start';


export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: { email: string, userId: string, token: string, expirationDate: Date }) {
  }
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string, password: string }) {
  }
}

export type AuthActions = Login | Logout | LoginStart | LoginFail;
