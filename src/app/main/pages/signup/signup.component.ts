import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users, UserSignupReq } from 'src/app/core/models/users.model';
import { FilesService } from 'src/app/core/service/files.service';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  TAG = 'SingupComponent';
  isLoading: boolean = false;
  users: UserSignupReq = new UserSignupReq();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  signupForm = this._fb.group({
    name: ['', Validators.required],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
  });

  constructor(
    public _fileservice: FilesService,
    private _fb: FormBuilder,
    private _usersService: UsersService,
    private _toastrService: ToastrService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  async signup() {
    let METHOD_TAG = 'save';
    this.isLoading = true;
    try {
      if (!this.signupForm.valid) {
        console.log(this.signupForm);
        this.signupForm.markAllAsTouched();

        return;
      }
      if (
        this.signupForm.value.password != this.signupForm.value.confirmpassword
      ) {
        this._toastrService.info('Password Mismatch');
        return;
      }
      let user = new UserSignupReq();
      user.name = this.signupForm.value.name!;
      user.email = this.signupForm.value.email!;
      user.password = this.signupForm.value.password!;
      let resp = await this._usersService.Signup(user);
      this._toastrService.success(
        'Signup Successful\nYou will be contacted shortly',
        '',
        {
          timeOut: 5000,
        }
      );
      this._router.navigate(['/login']);
      this.resetForm();
    } catch (error: any) {
      this._toastrService.error(error.error.message);
    } finally {
      this.isLoading = false;
    }
  }
  resetForm() {
    this.signupForm.reset({
      email: '',
      name: '',
      password: '',
      confirmpassword: '',
    });
  }
}
