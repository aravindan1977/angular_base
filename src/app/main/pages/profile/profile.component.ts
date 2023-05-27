import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { Users, UsersSelectReqDto } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { StorageService } from 'src/app/core/service/storage.service';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  TAG = 'ProfileComponent';

  profile: Users = new Users();
  isLoading: boolean = false;
  profileName: String = '';

  constructor(
    private _storageservice: StorageService,
    private _usersService: UsersService,
    public _authService: AuthService,
    public _router: Router
  ) {}

  ngOnInit(): void {
    this.getdata();
  }

  async getdata() {
    this.isLoading = true;
    let METHOD_TAG = 'getData';

    try {
      var user: UsersSelectReqDto = new UsersSelectReqDto();
      user.id = this._storageservice.User$.value.id;

      var resp = await this._usersService.select(user);
      this.profile = resp[0];

      this.profileName = this.profile.name
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), '')
        .toUpperCase();
    } catch (error) {
      console.error(`${this.TAG} ${METHOD_TAG} `, error);
    } finally {
      this.isLoading = false;
    }
  }
  logout() {
    this._authService.logout();
  }
}
