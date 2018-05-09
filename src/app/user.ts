import { Roles } from './role';
export interface IUser {
  key?: string;
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}
export class User implements IUser{
  public key: string = '';
  public roles: Roles;
  constructor(public uid: string = '',
      public email: string = '',
      public photoURL: string = '',
      public displayName: string = '') {
    this.roles = {reader: true, admin: true};
  }
}
