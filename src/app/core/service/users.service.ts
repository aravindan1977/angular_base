import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  UserLoginReq,
  UserLoginRes,
  UserRefreshTokenReq,
  UserRefreshTokenRes,
  Users,
  UsersDeleteReqDto,
  UserSignupReq,
  UsersSelectReqDto,
} from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/Users';
  }
  async select(req: UsersSelectReqDto): Promise<Array<Users>> {
    var result: Array<Users> = [];
    try {
      var postData: ActionReq<UsersSelectReqDto> =
        new ActionReq<UsersSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<Users>>>(
          this._baseUrl + '/Select',
          postData
        )
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async insert(req: Users): Promise<Users> {
    var result: Users = new Users();
    try {
      var postData: ActionReq<Users> = new ActionReq<Users>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Users>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: Users): Promise<Users> {
    var result: Users = new Users();
    try {
      var postData: ActionReq<Users> = new ActionReq<Users>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Users>>(this._baseUrl + '/Update', postData)
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: UsersDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<UsersDeleteReqDto> =
        new ActionReq<UsersDeleteReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        await this.http.post<ActionRes<boolean>>(
          this._baseUrl + '/Delete',
          postData
        )
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async login(req: UserLoginReq): Promise<UserLoginRes> {
    var result: UserLoginRes = new UserLoginRes();
    try {
      var postData: ActionReq<UserLoginReq> = new ActionReq<UserLoginReq>();
      postData.item = req;
      var resp = await firstValueFrom(
        await this.http.post<ActionRes<UserLoginRes>>(
          this._baseUrl + '/login',
          postData
        )
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async Signup(req: UserSignupReq): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<UserSignupReq> = new ActionReq<UserSignupReq>();
      postData.item = req;
      var resp = await firstValueFrom(
        await this.http.post<ActionRes<boolean>>(
          this._baseUrl + '/Signup',
          postData
        )
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async RefreshToken(req: UserRefreshTokenReq): Promise<UserRefreshTokenRes> {
    var result: UserRefreshTokenRes = new UserRefreshTokenRes();
    try {
      var postData: ActionReq<UserRefreshTokenReq> =
        new ActionReq<UserRefreshTokenReq>();
      postData.item = req;
      var resp = await firstValueFrom(
        await this.http.post<ActionRes<UserRefreshTokenRes>>(
          this._baseUrl + '/RefreshToken',
          postData
        )
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
}
