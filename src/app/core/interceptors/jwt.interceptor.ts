import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/service/auth.service';
import { AppConfigService } from '@app/service/app-config.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private environment: AppConfigService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiUrl = this.environment.config.apiUrl;
        const loginUrl = this.environment.config.loginUrl;
        const authUrl = this.environment.config.authUrl;
        /*let token = window.localStorage.getItem('token');
        console.log(token);
        if (token) {
            request = request.clone({
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer ' + token
                })
            });
        }  */
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser.access_token;
        //const isApiUrl = request.url.includes(apiUrl);
        const isLoginUrl = request.url === loginUrl;
        const isAuthUrl = request.url === authUrl;

        if (isLoggedIn && !isLoginUrl && !isAuthUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.access_token}`
                }
            });
        }
                           
        return next.handle(request);
    }
}