import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfigService } from '@app/service/app-config.service';
import { Observable } from 'rxjs';
import { YogaSession } from '../yoga-session-listing/model/yoga-session.model';

@Injectable()
export class YogaSessionService {
    constructor(private http: HttpClient, private environment: AppConfigService) { }

    url = this.environment.config.apiUrl + '/yoga-session';

    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    save(yogaSession): Observable<any> {
        console.log(yogaSession);
        return this.http.post(this.url, yogaSession);
    }

}