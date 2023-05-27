import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActionReq } from '../models/actionreq.model';
import { ActionRes } from '../models/actionres.model';
import {
  PersonCenteredPlan,
  PersonCenteredPlanDeleteReqDto,
  PersonCenteredPlanSelectReqDto,
} from '../models/personcenteredplan.model';

@Injectable({
  providedIn: 'root',
})
export class PersonCenteredPlanService {
  _baseUrl: string;
  constructor(private http: HttpClient) {
    this._baseUrl = environment.baseUrl + '/api/PersonCenteredPlan';
  }
  async select(
    req: PersonCenteredPlanSelectReqDto
  ): Promise<Array<PersonCenteredPlan>> {
    var result: Array<PersonCenteredPlan> = [];
    try {
      var postData: ActionReq<PersonCenteredPlanSelectReqDto> =
        new ActionReq<PersonCenteredPlanSelectReqDto>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<Array<PersonCenteredPlan>>>(
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
  async insert(req: PersonCenteredPlan): Promise<PersonCenteredPlan> {
    var result: PersonCenteredPlan = new PersonCenteredPlan();
    try {
      var postData: ActionReq<PersonCenteredPlan> =
        new ActionReq<PersonCenteredPlan>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<PersonCenteredPlan>>(
          this._baseUrl + '/Insert',
          postData
        )
      );

      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async update(req: PersonCenteredPlan): Promise<PersonCenteredPlan> {
    var result: PersonCenteredPlan = new PersonCenteredPlan();
    try {
      var postData: ActionReq<PersonCenteredPlan> =
        new ActionReq<PersonCenteredPlan>();
      postData.item = req;
      var resp = await firstValueFrom(
        this.http.post<ActionRes<PersonCenteredPlan>>(
          this._baseUrl + '/Update',
          postData
        )
      );
      if (resp.item) result = resp.item;
    } catch (error) {
      throw error;
    }
    return result;
  }
  async delete(req: PersonCenteredPlanDeleteReqDto): Promise<boolean> {
    var result: boolean = false;
    try {
      var postData: ActionReq<PersonCenteredPlanDeleteReqDto> =
        new ActionReq<PersonCenteredPlanDeleteReqDto>();
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
  generatePdf(id: number,name: string) {
    return this._baseUrl + `/GeneratePdf/${id}/${name}`;
  }
}
