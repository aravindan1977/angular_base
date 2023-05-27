
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  ReferenceType,
  ReferenceTypeDeleteReqDto,
  ReferenceTypeSelectReqDto,
} from '../models/referencetype.model';

@Injectable({
  providedIn: 'root',
})
export class ReferenceTypeService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/ReferenceType';
  }
  async select(req: ReferenceTypeSelectReqDto): Promise<Array<ReferenceType>> {
    var result: Array<ReferenceType> = [];
    try {
      var postData: ActionReq<ReferenceTypeSelectReqDto> =
        new ActionReq<ReferenceTypeSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<ReferenceType>>>(
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
  async insert(req: ReferenceType): Promise<ReferenceType> {
    var result: ReferenceType = new ReferenceType();
    try {
      var postData: ActionReq<ReferenceType> = new ActionReq<ReferenceType>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<ReferenceType>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: ReferenceType): Promise<ReferenceType> {
    var result: ReferenceType = new ReferenceType();
    try {
      var postData: ActionReq<ReferenceType> = new ActionReq<ReferenceType>();
      postData.item = req;
      var resp = await firstValueFrom(this.http
        .post<ActionRes<ReferenceType>>(this._baseUrl + '/Update', postData))
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: ReferenceTypeDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<ReferenceTypeDeleteReqDto> = new ActionReq<ReferenceTypeDeleteReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<boolean>>(this._baseUrl + '/Delete', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
}
