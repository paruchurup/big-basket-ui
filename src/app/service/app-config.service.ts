import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable()
export class AppConfigService {
    private appConfig;

    constructor(private injector: Injector) {
       
    }

    loadAppConfig() {
        const http = this.injector.get(HttpClient);

        return http
            .get('/assets/app-config.json')
            .toPromise()
            .then(data => {
                this.appConfig = data;
            })
            .catch(error => {
                this.appConfig = environment;
                if (environment.production) {
                    console.warn('Error loading app-config.json, using environment file instead');
                } else {
                    console.warn('Using environment file for local app setup');
                }
            });
    }

    get config() {
        return this.appConfig;
    }
}