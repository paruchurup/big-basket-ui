import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '@app/service/app-config.service';
import { User } from '@app/authentication/model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserRegistrationService {
    constructor(private http: HttpClient, private environment: AppConfigService) { }
    
    register(user: User): Observable<any> { 
        const userServiceUrl = this.environment.config.userServiceUrl;
        const clientId = this.environment.config.clientId;
        const clientSecret = this.environment.config.clientSecret;
        let subUrl = "/register";

        let headerJson = {
            'Authorization': 'Basic ' + btoa(`$clientId:@clientSecret`),
            'Content-type': 'application/json'
        };
           
        let headers = new HttpHeaders(headerJson);
        return this.http.post(userServiceUrl + subUrl, user, {headers: headers,  responseType : 'text'});
    }
}