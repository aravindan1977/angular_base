import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LocationAndDataHeaderComponent } from './components/location-and-data-header/location-and-data-header.component';
import { ListingComponent } from './pages/listing/listing.component';
import { UserComponent } from './pages/user/user.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OtploginComponent } from './pages/otplogin/otplogin.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { ResumeComponent } from './tojo/resume/resume.component';






@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    LocationAndDataHeaderComponent,
    ListingComponent,
    UserComponent,
    SettingsComponent,
    SignupComponent,
    OtploginComponent,
    AccessDeniedComponent,
    ProfileComponent,
   
    PersonalDataComponent,
    ResumeComponent,
   
    
    
  ],
  imports: [SharedModule, MainRoutingModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MainModule {}
