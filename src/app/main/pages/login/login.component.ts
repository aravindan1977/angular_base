import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { ErrorCodes } from 'src/app/core/models/actionres.model';
import { UserLoginReq } from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { FilesService } from 'src/app/core/service/files.service';
import { UsersService } from 'src/app/core/service/users.service';
// import { SampleSelectReqDto } from 'src/app/shared/models/sample.model';
// import { SampleService } from 'src/app/core/service/sample.service';

@Component({
  selector: 'main-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  TAG = 'LoginComponent';
  isLoading: boolean = false;
  loginForm = this._fb.group<UserLoginReq>(new UserLoginReq());
  constructor(
    public _fileservice: FilesService,
    private _toastrService: ToastrService,
    private _fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private _userService: UsersService,
    private _authService: AuthService
  ) {
    this.loginForm.controls.email.addValidators([Validators.required,Validators.email]);
  }

  login = async () => {
    try {
      if (this.loginForm.invalid) {
        return;
      }
      this.isLoading = true;
      let resp = await this._userService.login(
        this.loginForm.value as UserLoginReq
      );
      this._authService.setAuthToken(resp.accesstoken);
      this._authService.setRefreshToken(resp.refreshtoken);
      this._authService.setUser(resp.user);
      this.router.navigate(['home', 'listing']);
    } catch (error: any) {
      let message = error.error.message;
      let code = error.error.code;
      if (
        code == ErrorCodes.UserNotApproved ||
        code == ErrorCodes.SystemNotApproved
      ) {
        message =
          'Your account is not approved yet. Contact support for further assistance.';
      }

      this._toastrService.error(message);
    } finally {
      this.isLoading = false;
    }
  };
}
