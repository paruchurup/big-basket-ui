import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrationComponent } from '@app/authentication/components/registration/user-registration.component';
import { WelcomeComponent } from '@app/welcome/welcome.component';
import { LoginComponent } from '@app/authentication/components/login/login.component';
import { ForgotPasswordComponent } from '@app/authentication/components/forgot-password/forgot-password.component';
import { UserListingComponent } from './user/components/user-listing/user-listing.component';
import { YogaSessionCreateComponent } from './yoga-session/yoga-session-create/yoga-session-create.component';
import { YogaSessionListingComponent } from './yoga-session/yoga-session-listing/yoga-session-listing.component';

const routes: Routes = [
  {
    path: 'user-register',
    component: UserRegistrationComponent  
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'user',
    component: UserListingComponent
  },
  {
    path: 'session-create',
    component: YogaSessionCreateComponent
  },
  {
    path: 'list-sessions',
    component: YogaSessionListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
