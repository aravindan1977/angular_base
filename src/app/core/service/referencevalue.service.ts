
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  DesignAttributeValueBulkImportReqResDto,
  ReferenceValue,
  ReferenceValueDeleteReqDto,
  ReferenceValueSelectReqDto,
} from '../models/referencevalue.model';

@Injectable({
  providedIn: 'root',
})
export class ReferenceValueService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/ReferenceValue';
  }
  async select(req: ReferenceValueSelectReqDto): Promise<Array<ReferenceValue>> {
    var result: Array<ReferenceValue> = [];
    try {
      var postData: ActionReq<ReferenceValueSelectReqDto> =
        new ActionReq<ReferenceValueSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<ReferenceValue>>>(
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
  async insert(req: ReferenceValue): Promise<ReferenceValue> {
    var result: ReferenceValue = new ReferenceValue();
    try {
      var postData: ActionReq<ReferenceValue> = new ActionReq<ReferenceValue>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<ReferenceValue>>(this._baseUrl + '/Insert', postData)
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: ReferenceValue): Promise<ReferenceValue> {
    var result: ReferenceValue = new ReferenceValue();
    try {
      var postData: ActionReq<ReferenceValue> = new ActionReq<ReferenceValue>();
      postData.item = req;
      var resp = await firstValueFrom(this.http
        .post<ActionRes<ReferenceValue>>(this._baseUrl + '/Update', postData))
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: ReferenceValueDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<ReferenceValueDeleteReqDto> = new ActionReq<ReferenceValueDeleteReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(await this.http
        .post<ActionRes<boolean>>(this._baseUrl + '/Delete', postData))
        
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }

  async ImportBulk(req: Array<DesignAttributeValueBulkImportReqResDto>): Promise<Array<DesignAttributeValueBulkImportReqResDto>> {
    var result: Array<DesignAttributeValueBulkImportReqResDto> = [];
    try {
      var postData: ActionReq<Array<DesignAttributeValueBulkImportReqResDto>> = new ActionReq<
        Array<DesignAttributeValueBulkImportReqResDto>
      >();
      postData.item = req;
      var resp = await firstValueFrom(
        await this.http.post<ActionRes<Array<DesignAttributeValueBulkImportReqResDto>>>(
          this._baseUrl + '/ImportBulk',
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
