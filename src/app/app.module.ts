import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_INITIALIZER, Optional, SkipSelf } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from '@app/authentication/components/registration/user-registration.component';
import { WelcomeComponent } from '@app/welcome/welcome.component';
import { LoginComponent } from '@app/authentication/components/login/login.component';
import { ForgotPasswordComponent } from '@app/authentication/components/forgot-password/forgot-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { JwtTokenInterceptor } from '@app/core/interceptors/jwt.interceptor';
import { UserListingComponent } from '@app/user/components/user-listing/user-listing.component';

import { AuthenticationService } from '@app/core/service/auth.service';
import { UserRegistrationService } from '@app/authentication/service/user.registration.service';
import { UserListingService } from '@app/user/service/user.listing.service';
import { TableModule } from 'primeng/table';

import { AppConfigService } from '@app/service/app-config.service';
import { YogaSessionComponent } from './yoga-session/yoga-session/yoga-session.component';
import { YogaSessionListingComponent } from './yoga-session/yoga-session-listing/yoga-session-listing.component';
import { YogaSessionCreateComponent } from './yoga-session/yoga-session-create/yoga-session-create.component';
import { YogaSessionService } from '@app/yoga-session/service/yoga-session.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CalendarModule } from 'primeng/calendar';
import { TextChatComponent } from './text-chat/text-chat/text-chat.component';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    WelcomeComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserListingComponent,
    YogaSessionComponent,
    YogaSessionListingComponent,
    YogaSessionCreateComponent,
    TextChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [AuthenticationService, 
            UserRegistrationService,
             AppConfigService,
             UserListingService,
             YogaSessionService,
              {
                  provide: APP_INITIALIZER,
                  useFactory: appInitializerFn,
                  multi: true,
                  deps: [AppConfigService]
              },
              {
                provide: HTTP_INTERCEPTORS,
                useClass: JwtTokenInterceptor,
                multi : true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
