import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfigService } from '@app/service/app-config.service';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient, private environment: AppConfigService) { }

    login(loginPayload)  {
        const authServerUrl = this.environment.config.authServerUrl;
        console.log(loginPayload);
        
        let headerJson = {
            'Authorization': 'Basic ' + btoa('yoga-app:yoga-369-app-123'),
            'Content-type': 'application/x-www-form-urlencoded'
        };
           
        let headers = new HttpHeaders(headerJson);
     
          return this.http.post(authServerUrl, loginPayload, {headers: headers});
      }

}