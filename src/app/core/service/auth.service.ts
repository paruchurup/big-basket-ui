import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/authentication/model/user.model';
import { AppConfigService } from '@app/service/app-config.service';

@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    private currentUser: Observable<User>;

    constructor(private http: HttpClient, private environment: AppConfigService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return  this.currentUserSubject.value;
    }

   
    login(username : string, password: string){
        const authServerUrl = this.environment.config.authServerUrl+'/oauth/token';
        const redirectUri = this.environment.config.apiUrl+'/home';
        const clientId = this.environment.config.clientId;
        const clientSecret = this.environment.config.clientSecret;
        const grantType = this.environment.config.grantType;
       
        const params = new HttpParams().set('username', username)
                                     .set('password', password)
                                     .set('grant_type', grantType)
                                     .set('scope', 'any')
                                     .set('redirect_uri', redirectUri );
        const payload = {'username': username, 'password':password };
               
        let headerJson = {
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`),
            'Content-type': 'application/x-www-form-urlencoded'
        };
           
        let headers = new HttpHeaders(headerJson);
     
        return this.http.post<any>(authServerUrl, payload , {params: params, headers: headers})
                    .pipe(map(resp => {
                        if(resp && resp.access_token) {
                            localStorage.setItem('currentUser', JSON.stringify(resp));
                            this.currentUserSubject.next(resp);
                        }
                    }))
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}