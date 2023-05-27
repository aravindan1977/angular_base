import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AngularGridInstance,
  Column,
  Filters,
  Formatters,
  GridOption,
  OnEventArgs,
  SlickEventData,
} from 'angular-slickgrid';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { Users, UsersSelectReqDto } from 'src/app/core/models/users.model';
import { UsersService } from 'src/app/core/service/users.service';
import {
  PersonCenteredPlan,
  PersonCenteredPlanSelectReqDto,
} from 'src/app/core/models/personcenteredplan.model';
import { PersonCenteredPlanService } from 'src/app/core/service/personcenteredplan.service';
import * as moment from 'moment';

@Component({
  selector: 'main-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  TAG = 'UserComponent';
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  angularGrid!: AngularGridInstance;
  isLoading: boolean = false;
  // List: any = [];
  personCenteredPlanList: Array<PersonCenteredPlan> = [];

  constructor(
    private _toastrService: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder,
    private _personCenteredPlanService: PersonCenteredPlanService
  ) {}

  ngOnInit(): void {
  
    this.getData();
  }
  async getData() {
    // this.List.push({
    //   id: 1,
    // });
    let METHOD_TAG = 'getData';
    try {
      var request = new PersonCenteredPlanSelectReqDto();
      this.personCenteredPlanList =
        await this._personCenteredPlanService.select(request);
    } catch (error) {
      console.error(`${this.TAG} ${METHOD_TAG} `, error);
    }
  }
 

}
