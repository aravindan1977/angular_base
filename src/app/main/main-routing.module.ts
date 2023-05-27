import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from '../core/guards/authenticate.guard';
import { AuthorizeGuard } from '../core/guards/authorize.guard';
import { UserRoles } from '../core/models/users.model';
import { MainComponent } from './main.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';

import { HomeComponent } from './pages/home/home.component';

import { ListingComponent } from './pages/listing/listing.component';
import { LoginComponent } from './pages/login/login.component';

import { OtploginComponent } from './pages/otplogin/otplogin.component';
import { PcphomeComponent } from './pages/pcphome/pcphome.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { SettingsComponent } from './pages/settings/settings.component';
import { SignupComponent } from './pages/signup/signup.component';

import { UserComponent } from './pages/user/user.component';
import { ResumeComponent } from './tojo/resume/resume.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'pcphome',
        pathMatch: 'full',
      }, {
        path: 'pcphome',
        component: PcphomeComponent,
      },{

        path: '',
        component: MainComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
          {
            path: 'access-denied',
            component: AccessDeniedComponent,
          },
          
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'signup',
            component: SignupComponent,
          },
          {
            path: 'otplogin',
            component: OtploginComponent,
          },

          {
            path: 'home',
            component: HomeComponent,
            canActivate: [AuthenticateGuard],
            children: [
              {
                path: '',
                redirectTo: 'listing',
                pathMatch: 'full',
              },
              {
                path: 'listing',
                component: ListingComponent,
              },
              {
                path: 'resume',
                component: ResumeComponent,
              },
              

              {
                path: 'settings',
                component: SettingsComponent,
                children: [
                  {
                    path: '',
                    redirectTo: 'profile',
                    pathMatch: 'full',
                  },
                  
                  {
                    path: 'profile',
                    component: ProfileComponent,
                  },
                  {
                    path: 'user',
                    component: UserComponent,
                  },

                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
