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

@Component({
  selector: 'main-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  TAG = 'UserComponent';
  usersList: Array<Users> = [];
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  angularGrid!: AngularGridInstance;
  isLoading: boolean = false;
  usersMergeForm = this._fb.group({
    id: [0],
    version: [0],
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    isapproved: [false],
    issystem: [false],
    issystemapproved: [false],
  });
  primaryUsersList: Array<Users> = [];
  constructor(
    private _usersService: UsersService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.prepareGrid();
    this.getData();
  }
  async getData() {
    let METHOD_TAG = 'getData';
    try {
      var request = new UsersSelectReqDto();
      this.usersList = await this._usersService.select(request);
      this.primaryUsersList = _.filter(this.usersList, (e) => {
        return e.parentid == 0;
      });
    } catch (error) {
      console.error(`${this.TAG} ${METHOD_TAG} `, error);
    }
  }
  prepareGrid() {
    this.columnDefinitions = [
      {
        id: 'edit',
        name: '',
        field: '',
        maxWidth: 40,
        formatter: Formatters.editIcon,
        onCellClick: (e: SlickEventData, args: OnEventArgs) => {
          let users: Users = args.dataContext;
          this.selectUsers(users);
        },
      },
      {
        id: 'delete',
        name: '',
          
        field: '',
        maxWidth: 40,
        //formatter: Formatters.deleteIcon,

        formatter: function(cell, formatterParams) {
          return '<i class="fas fa-trash-alt cursor-pointer" style="color: red; font-size: 13px"></i>';
        },
        // onCellClick: (attributeValue: ReferenceValueDeleteReqDto){
        //  if (attributeValue.id != null) {  
        //   await this._referenceValueService.delete(attributeValue);
        //   }       
        // },
      },
      //{ id: 'id', name: 'Id', field: 'id', maxWidth: 50, sortable: true },
      {
        id: 'name',
        name: 'Name',
        field: 'name',
        sortable: true,
        filterable: true,
      },
      {
        id: 'isapproved',
        name: 'Approved?',
        field: 'isapproved',
        sortable: true,
        filterable: true,
        type: 'boolean',
        formatter: Formatters.checkbox,
        filter: {
          model: Filters.multipleSelect,
          collection: [
            {
              label: 'True',
              value: true,
            },
            {
              label: 'False',
              value: false,
            },
          ],
        },
      },
      {
        id: 'issystem',
        name: 'System',
        field: 'issystem',
        sortable: true,
        filterable: true,
        type: 'boolean',
        formatter: Formatters.checkbox,
        filter: {
          model: Filters.multipleSelect,
          collection: [
            {
              label: 'True',
              value: true,
            },
            {
              label: 'False',
              value: false,
            },
          ],
        },
      },
      {
        id: 'issystemapproved',
        name: 'Is System Approved?',
        field: 'issystemapproved',
        sortable: true,
        filterable: true,
        type: 'boolean',
        formatter: Formatters.checkbox,
        filter: {
          model: Filters.multipleSelect,
          collection: [
            {
              label: 'True',
              value: true,
            },
            {
              label: 'False',
              value: false,
            },
          ],
        },
      },
    ];

    this.gridOptions = {
      gridHeight: '100%',
      gridWidth: '100%',
      // datasetIdPropertyName: 'Id',
      autoResize: {
        container: 'users-component-users-list-container', // container DOM selector
        calculateAvailableSizeBy: 'container',
      },
      enableAutoResize: true,
      enableFiltering: true,
    };
  }
  selectUsers(users: Users) {
    this.usersMergeForm.patchValue({
      id: users.id,
      version: users.version,
      name: users.name,
      email: users.email,
      isapproved: users.isapproved,
      issystem: users.issystem,
      issystemapproved: users.issystemapproved,
    });
  }
  async save() {
    let METHOD_TAG = 'save';
    this.isLoading = true;
    try {
      if (!this.usersMergeForm.valid) {
        this.usersMergeForm.markAllAsTouched();
        console.log(this.usersMergeForm);

        return;
      }
      let users: Users = new Users();
      users.id = this.usersMergeForm.value.id!;
      users.version = this.usersMergeForm.value.version!;
      users.name = this.usersMergeForm.value.name!;
      users.email = this.usersMergeForm.value.email!;
      users.isapproved = this.usersMergeForm.value.isapproved!;
      users.issystem = this.usersMergeForm.value.issystem!;
      users.issystemapproved = this.usersMergeForm.value.issystemapproved!;
      if (users.id > 0) {
        await this._usersService.update(users);
      } else {
        await this._usersService.insert(users);
      }
      this.getData();
      this._toastrService.success('Saved');
      this.resetForm();
    } catch (error: any) {
      let message = error.error.message;
      this._toastrService.error(message);

      // console.error(`${this.TAG} ${METHOD_TAG} `, error);
      // this._toastrService.error("Couldn't Save");
    } finally {
      this.isLoading = false;
    }
  }

  async resetForm() {
    this.usersMergeForm.reset(new Users());
  }
}
