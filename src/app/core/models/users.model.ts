export class Users {
  id: number = 0;
  name: string = '';
  email: string = '';
  passwordsalt: string = '';
  passwordhash: string = '';
  issystem: boolean = false;
  issystemapproved: boolean = false;
  isapproved: boolean = false;
  version: number = 0;
  createdby: number = 0;
  createdon: Date = new Date();
  modifiedby: number = 0;
  modifiedon: Date = new Date();
  attributes: Users.AttributesData = new Users.AttributesData();
  isactive: boolean = false;
  issuspended: boolean = false;
  parentid: number = 0;
  isfactory: boolean = false;
  notes: string = '';
}

export namespace Users {
  export class AttributesData {}
}

export class UsersSelectReqDto {
  id: number = 0;
  email: String = '';
  password: String = '';
  issystem: boolean = false;
}

export class UsersDeleteReqDto {
  id: number = 0;
  version: number = 0;
}
export enum UserRoles {
  System = 1,
}

export class UserSignupReq {
  name: String = '';
  email: String = '';
  password: String = '';
  issystem: boolean = false;
}
export class UserLoginReq {
  email: String = '';
  password: String = '';
}
export class UserLoginRes {
  accesstoken: String = '';
  refreshtoken: String = '';
  user: Users = new Users();
}
export class UserRefreshTokenReq {
  refreshtoken: string = '';
}
export class UserRefreshTokenRes {
  accesstoken: String = '';
  refreshtoken: String = '';
  user: Users = new Users();
}
