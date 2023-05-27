import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../../core/models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  Files,
  FilesDeleteReqDto,
  FilesSelectReqDto,
} from '../models/files.model';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  static getStatic(arg0: string) {
    throw new Error('Method not implemented.');
  }
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/Files';
  }
  async select(req: FilesSelectReqDto): Promise<Array<Files>> {
    var result: Array<Files> = [];
    try {
      var postData: ActionReq<FilesSelectReqDto> =
        new ActionReq<FilesSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<Files>>>(
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
  async insert(req: Files): Promise<Files> {
    var result: Files = new Files();
    try {
      var postData: ActionReq<Files> = new ActionReq<Files>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Files>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: Files): Promise<Files> {
    var result: Files = new Files();
    try {
      var postData: ActionReq<Files> = new ActionReq<Files>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Files>>(this._baseUrl + '/Update', postData)
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: FilesDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<FilesDeleteReqDto> =
        new ActionReq<FilesDeleteReqDto>();
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
  async saveSys(req: FormData): Promise<Array<number>> {
    var result: Array<number> = [];
    try {
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<number>>>(this._baseUrl + '/SaveSys', req)
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async saveApp(req: FormData): Promise<Array<number>> {
    var result: Array<number> = [];
    try {
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<number>>>(this._baseUrl + '/SaveApp', req)
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  get(req: number): String {
    return this._baseUrl + '/get?id=' + req;
  }
  getStatic(path:String): String {
    return environment.baseUrl + path;
  }
}
