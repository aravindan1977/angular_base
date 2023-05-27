import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {} from 'src/app/core/models/users.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-otplogin',
  templateUrl: './otplogin.component.html',
  styleUrls: ['./otplogin.component.scss'],
})
export class OtploginComponent {
  // TAG = 'LoginComponent';
  // isLoading: boolean = false;
  // otpLoginForm = this._fb.group({
  //   otpid: [0],
  //   otp1: [0,[Validators.required, Validators.maxLength(1), Validators.max(9), Validators.min(0)]],
  //   otp2: [0],
  //   otp3: [0],
  //   otp4: [0],
  // });
  // mobilenumber: String = '';
  // constructor(
  //   private _fb: FormBuilder,
  //   private route: ActivatedRoute,
  //   private _userService: UsersService,
  //   private _toastrSevice: ToastrService,
  //   private _authService: AuthService,
  //   private router: Router
  // ) {
  //   this.mobilenumber = this.route.snapshot.queryParams['mobilenumber'];
  //   this.otpLoginForm.patchValue({
  //     otpid: Number(this.route.snapshot.queryParams['otpid']),
  //   });
  // }
  // ngOnInit(): void {}
  // login = async () => {
  //   try {
  //     if (this.otpLoginForm.invalid) {
  //       this.otpLoginForm.markAllAsTouched();
  //       return;
  //     }
  //     this.isLoading = true;
  //     let request = new UsersValidateOtpReq();
  //     request.otpid = this.otpLoginForm.value.otpid!;
  //     request.otp = `${this.otpLoginForm.value.otp1!}${this.otpLoginForm.value
  //       .otp2!}${this.otpLoginForm.value.otp3!}${this.otpLoginForm.value
  //       .otp4!}`;
  //     let resp = await this._userService.validateOtp(request);
  //     if (!(resp.user.issystem || resp.user.isvendor)) {
  //       this._toastrSevice.error('Access Denied');
  //       return;
  //     }
  //     this._authService.setAuthToken(resp.accesstoken);
  //     this._authService.setRefreshToken(resp.refreshtoken);
  //     this._authService.setUser(resp.user);
  //     if (resp.user.issystem) {
  //       this.router.navigate(['home', 'listing', 'category']);
  //     } else {
  //       this.router.navigate(['home', 'listing', 'design']);
  //     }
  //   } catch (error:any) {
  //     this._toastrSevice.error(error.error.message);
  //   } finally {
  //     this.isLoading = false;
  //   }
  // };
}
