import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfigService } from '@app/service/app-config.service';
import { Observable } from 'rxjs';
import { User } from '@app/authentication/model/user.model';

@Injectable()
export class UserListingService {
    constructor(private http: HttpClient, private environment: AppConfigService) { }

    getAllUsers() : Observable<any> {
        return this.http.get(this.environment.config.userServiceUrl+'/list');
    }
}